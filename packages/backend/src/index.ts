import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import redis from 'redis';

// Load environment variables
dotenv.config();

// Import middleware
import { authenticateToken } from './middleware/auth.middleware';

// Import routes
import authRoutes from './routes/auth.routes';
import patientRoutes from './routes/patients.routes';
import callRoutes from './routes/calls.routes';
import triageRoutes from './routes/triage.routes';
import visitRoutes from './routes/visits.routes';
import prescriptionRoutes from './routes/prescriptions.routes';
import dispatchRoutes from './routes/dispatch.routes';
import telemedicineRoutes from './routes/telemedicine.routes';
import transportRoutes from './routes/transport.routes';
import userRoutes from './routes/users.routes';
import analyticsRoutes from './routes/analytics.routes';

// Initialize Express app
const app: Express = express();

// Environment variables
const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = process.env.HOST || 'localhost';
const NODE_ENV: string = process.env.NODE_ENV || 'development';
const CORS_ORIGIN: string = process.env.CORS_ORIGIN || 'http://localhost:3001';

// ============================================================================
// Security Middleware
// ============================================================================

// Helmet security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  strictTransportSecurity: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));

// CORS configuration from environment variables
app.use(cors({
  origin: CORS_ORIGIN.split(',').map(origin => origin.trim()),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
}));

// ============================================================================
// Body Parser Middleware
// ============================================================================

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ============================================================================
// Request Logging Middleware
// ============================================================================

const morganFormat = NODE_ENV === 'production' 
  ? 'combined' 
  : 'dev';

app.use(morgan(morganFormat, {
  skip: (req: Request) => {
    // Skip logging health checks
    return req.path === '/health' || req.path === '/api/v1/health';
  },
}));

// ============================================================================
// Rate Limiting Middleware
// ============================================================================

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req: Request) => {
    // Skip rate limiting for health checks
    return req.path === '/health' || req.path === '/api/v1/health';
  },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // limit login attempts
  message: 'Too many login attempts, please try again later.',
  skipSuccessfulRequests: true,
  skipFailedRequests: false,
});

app.use(limiter);

// ============================================================================
// Database Initialization (PostgreSQL)
// ============================================================================

const dbPool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'portare_areu',
});

dbPool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

console.log('✓ PostgreSQL connection pool initialized');

// ============================================================================
// Redis Cache Initialization
// ============================================================================

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    reconnectStrategy: (retries: number) => Math.min(retries * 50, 500),
  },
});

redisClient.on('error', (err: Error) => {
  console.error('Redis Client Error', err);
});

redisClient.on('connect', () => {
  console.log('✓ Redis cache connected');
});

(async () => {
  await redisClient.connect();
})().catch(console.error);

// Make database pool and redis client available globally
declare global {
  namespace Express {
    interface Request {
      db?: Pool;
      redis?: typeof redisClient;
    }
  }
}

// ============================================================================
// Middleware to attach database and redis to requests
// ============================================================================

app.use((req: Request, res: Response, next: NextFunction) => {
  req.db = dbPool;
  req.redis = redisClient;
  next();
});

// ============================================================================
// Health Check Endpoints
// ============================================================================

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    service: 'PORTARE-AREU API',
    version: 'v1',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ============================================================================
// API Routes
// ============================================================================

// Authentication routes (with stricter rate limiting)
app.use('/api/v1/auth', authLimiter, authRoutes);

// Protected routes (require authentication)
app.use('/api/v1/patients', authenticateToken, patientRoutes);
app.use('/api/v1/calls', authenticateToken, callRoutes);
app.use('/api/v1/triage', authenticateToken, triageRoutes);
app.use('/api/v1/visits', authenticateToken, visitRoutes);
app.use('/api/v1/prescriptions', authenticateToken, prescriptionRoutes);
app.use('/api/v1/dispatch', authenticateToken, dispatchRoutes);
app.use('/api/v1/telemedicine', authenticateToken, telemedicineRoutes);
app.use('/api/v1/transport', authenticateToken, transportRoutes);
app.use('/api/v1/users', authenticateToken, userRoutes);
app.use('/api/v1/analytics', authenticateToken, analyticsRoutes);

// ============================================================================
// 404 Not Found Handler
// ============================================================================

app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    code: 'NOT_FOUND',
    message: `Route ${req.method} ${req.path} not found`,
    timestamp: new Date().toISOString(),
  });
});

// ============================================================================
// Global Error Handler Middleware
// ============================================================================

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const code = err.code || 'INTERNAL_ERROR';

  console.error({
    timestamp: new Date().toISOString(),
    status,
    code,
    message,
    method: req.method,
    path: req.path,
    stack: NODE_ENV === 'development' ? err.stack : undefined,
  });

  res.status(status).json({
    status: 'error',
    code,
    message,
    timestamp: new Date().toISOString(),
    ...(NODE_ENV === 'development' && { stack: err.stack }),
  });
});

// ============================================================================
// Server Startup
// ============================================================================

let server: any;

const startServer = async () => {
  try {
    // Test database connection
    const dbClient = await dbPool.connect();
    const result = await dbClient.query('SELECT NOW()');
    dbClient.release();
    console.log('✓ PostgreSQL connection verified');

    // Start server
    server = app.listen(PORT, HOST, () => {
      console.log(`
╔══════════════════════════════════════════════════════════════╗
║                 PORTARE-AREU Server Started                  ║
╠══════════════════════════════════════════════════════════════╣
║ Environment: ${NODE_ENV.padEnd(55)}║
║ Host: ${`${HOST}:${PORT}`.padEnd(56)}║
║ API Base: ${`http://${HOST}:${PORT}/api/v1`.padEnd(49)}║
║ Health: ${`http://${HOST}:${PORT}/health`.padEnd(52)}║
╚══════════════════════════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// ============================================================================
// Graceful Shutdown Handlers
// ============================================================================

const gracefulShutdown = async (signal: string) => {
  console.log(`\n${signal} received. Starting graceful shutdown...`);

  // Stop accepting new requests
  if (server) {
    server.close(async () => {
      console.log('✓ Server closed');

      // Close database pool
      try {
        await dbPool.end();
        console.log('✓ PostgreSQL connection pool closed');
      } catch (error) {
        console.error('Error closing PostgreSQL pool:', error);
      }

      // Close Redis connection
      try {
        await redisClient.quit();
        console.log('✓ Redis connection closed');
      } catch (error) {
        console.error('Error closing Redis connection:', error);
      }

      console.log('✓ Graceful shutdown completed');
      process.exit(0);
    });

    // Force shutdown after 30 seconds
    setTimeout(() => {
      console.error('Graceful shutdown timeout, forcing exit');
      process.exit(1);
    }, 30000);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// ============================================================================
// Start Server
// ============================================================================

startServer();

export default app;
