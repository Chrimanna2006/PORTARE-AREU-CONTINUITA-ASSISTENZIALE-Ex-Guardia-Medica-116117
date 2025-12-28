# PORTARE AREU Continuità Assistenziale
## Ex-Guardia Medica 116117 Digital Transformation Platform

![Status](https://img.shields.io/badge/Status-Production-green)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-brightgreen)
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--12--28-orange)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [System Architecture](#system-architecture)
4. [Technology Stack](#technology-stack)
5. [Installation Guide](#installation-guide)
6. [Configuration](#configuration)
7. [Admin Credentials](#admin-credentials)
8. [API Overview](#api-overview)
9. [Security Compliance](#security-compliance)
10. [Deployment Instructions](#deployment-instructions)
11. [Database Schema](#database-schema)
12. [Troubleshooting](#troubleshooting)
13. [Support & Contributing](#support--contributing)

---

## Project Overview

**PORTARE AREU Continuità Assistenziale** is a comprehensive digital platform designed to modernize and streamline the healthcare continuity assistance services previously managed by Guardia Medica (116117 emergency medical service in Italy). This system facilitates efficient patient care coordination, emergency response management, and healthcare resource allocation.

### Project Goals
- ✅ Digitalize emergency medical assistance workflows
- ✅ Improve response times and patient care quality
- ✅ Enable real-time coordination between medical personnel
- ✅ Maintain comprehensive audit trails for compliance
- ✅ Provide data-driven analytics for service improvement
- ✅ Ensure HIPAA and GDPR compliance
- ✅ Support multi-region deployment capabilities

### Target Users
- **Healthcare Administrators**: Manage system configuration and user access
- **Medical Professionals**: Respond to emergencies and provide care
- **Dispatch Operators**: Coordinate emergency responses
- **System Monitors**: Oversee platform health and performance

---

## Key Features

### 🏥 Core Healthcare Features
- **Emergency Call Management**: Centralized intake and triage system
- **Real-time Dispatch**: GPS-enabled ambulance and medical team routing
- **Patient Record Management**: Comprehensive EHR integration
- **Clinical Decision Support**: AI-powered symptom assessment
- **Multi-language Support**: Italian, English, and regional dialects

### 👥 User Management
- Role-Based Access Control (RBAC)
- Multi-factor Authentication (MFA)
- Team collaboration tools
- Activity logging and audit trails
- Permission delegation system

### 📊 Analytics & Reporting
- Real-time dashboard analytics
- Performance metrics tracking
- Historical trend analysis
- Custom report generation
- KPI monitoring

### 🔐 Security Features
- End-to-end encryption for sensitive data
- API rate limiting and throttling
- DDoS protection
- Vulnerability scanning
- Regular security audits
- Data masking and anonymization

### 📱 Interface Options
- Web-based administration portal
- Mobile app for field personnel
- REST API for integrations
- WebSocket support for real-time updates
- CLI tools for batch operations

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Web Portal   │  │ Mobile App   │  │ CLI Tools    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS/WebSocket
┌──────────────────────────▼──────────────────────────────────┐
│               API Gateway & Load Balancer                   │
│  (Authentication, Rate Limiting, Request Routing)           │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│              Microservices Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Auth Service │  │ Care Service │  │ Dispatch Svc │      │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│  │ Analytics    │  │ Patient Mgmt │  │ Notification │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│            Data Persistence Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ PostgreSQL   │  │ Redis Cache  │  │ Document DB  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│         Integration & External Services                     │
│  ├─ Hospital EHR Systems      ├─ SMS/Email Provider         │
│  ├─ GPS Mapping Services      ├─ Payment Gateway            │
│  ├─ Notification Services     ├─ Compliance Monitoring      │
│  └─ Backup & Disaster Recovery                             │
└─────────────────────────────────────────────────────────────┘
```

### Service Components

| Service | Purpose | Port | Database |
|---------|---------|------|----------|
| Auth Service | User authentication & authorization | 8001 | PostgreSQL |
| Patient Service | Patient data management | 8002 | PostgreSQL |
| Care Service | Care coordination | 8003 | PostgreSQL |
| Dispatch Service | Emergency dispatch management | 8004 | PostgreSQL |
| Analytics Service | Data analysis & reporting | 8005 | MongoDB |
| Notification Service | Alert & message delivery | 8006 | Redis |
| API Gateway | Request routing & throttling | 8000 | Redis |

---

## Technology Stack

### Backend
- **Framework**: Node.js 18+ / Python 3.10+
- **API**: Express.js / Flask with REST & GraphQL
- **Authentication**: JWT with OAuth 2.0
- **Database**: PostgreSQL 14+, MongoDB 5.0+
- **Cache**: Redis 7.0+
- **Message Queue**: RabbitMQ 3.11+
- **Search**: Elasticsearch 8.0+

### Frontend
- **Web**: React 18+, TypeScript, Redux
- **Mobile**: React Native / Flutter
- **UI Framework**: Material-UI 5.0+
- **Real-time**: WebSocket, Socket.io

### DevOps & Infrastructure
- **Containerization**: Docker 20.10+
- **Orchestration**: Kubernetes 1.25+
- **CI/CD**: GitHub Actions, GitLab CI
- **Monitoring**: Prometheus, Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Infrastructure as Code**: Terraform, Helm

### Security & Compliance
- **SSL/TLS**: Let's Encrypt integration
- **Encryption**: AES-256, RSA-4096
- **SIEM**: Security Information & Event Management
- **Backup**: 3-2-1 backup strategy with encrypted storage

---

## Installation Guide

### Prerequisites

Before installation, ensure you have:

```bash
# System Requirements
- CPU: 4+ cores
- RAM: 8GB minimum (16GB recommended)
- Storage: 50GB+ SSD
- OS: Ubuntu 20.04 LTS, CentOS 8, or Docker-compatible

# Required Software
- Docker & Docker Compose 20.10+
- Node.js 18+ & npm 8+
- Python 3.10+ & pip
- PostgreSQL client tools
- Git 2.35+
```

### Step 1: Clone Repository

```bash
git clone https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117.git
cd PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117
```

### Step 2: Environment Setup

```bash
# Copy environment template
cp .env.example .env
cp .env.production .env.production

# Edit environment variables
nano .env
```

**Essential Environment Variables:**
```env
# Application
NODE_ENV=production
APP_NAME=PORTARE-AREU
APP_VERSION=1.0.0
LOG_LEVEL=info

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portare_areu_db
DB_USER=portare_user
DB_PASSWORD=<strong-password>
DB_SSL=true

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=<strong-password>
REDIS_DB=0

# Authentication
JWT_SECRET=<strong-jwt-secret>
JWT_EXPIRY=24h
SESSION_SECRET=<strong-session-secret>

# API Configuration
API_PORT=8000
API_GATEWAY_URL=https://api.portare-areu.local
CORS_ORIGINS=https://app.portare-areu.local,https://admin.portare-areu.local

# Email Service
SMTP_HOST=mail.portare-areu.local
SMTP_PORT=587
SMTP_USER=noreply@portare-areu.local
SMTP_PASSWORD=<strong-password>
MAIL_FROM=PORTARE AREU <noreply@portare-areu.local>

# SMS Service (optional)
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=<account-sid>
TWILIO_AUTH_TOKEN=<auth-token>
TWILIO_PHONE=+39XXXXXXXXXX

# Security
ENCRYPTION_KEY=<strong-encryption-key>
ENCRYPTION_ALGORITHM=aes-256-cbc
SESSION_TIMEOUT=1800
MAX_LOGIN_ATTEMPTS=5

# Monitoring
SENTRY_DSN=<sentry-dsn>
PROMETHEUS_ENABLED=true
GRAFANA_URL=http://localhost:3000

# Backup
BACKUP_ENABLED=true
BACKUP_INTERVAL=24h
BACKUP_RETENTION_DAYS=30
BACKUP_LOCATION=/data/backups
```

### Step 3: Docker Deployment

```bash
# Build Docker images
docker-compose build

# Start all services
docker-compose up -d

# Verify services are running
docker-compose ps

# View logs
docker-compose logs -f
```

**Docker Compose Services:**
- PostgreSQL (port 5432)
- Redis (port 6379)
- MongoDB (port 27017)
- RabbitMQ (port 5672, admin: 15672)
- API Gateway (port 8000)
- All microservices

### Step 4: Database Initialization

```bash
# Run migrations
docker-compose exec api npm run db:migrate

# Seed initial data
docker-compose exec api npm run db:seed

# Verify database
docker-compose exec postgres psql -U portare_user -d portare_areu_db \
  -c "SELECT version();"
```

### Step 5: Verify Installation

```bash
# Test API health
curl -H "Authorization: Bearer $(cat .auth_token)" \
  https://localhost:8000/api/v1/health

# Check service status
curl https://localhost:8000/api/v1/status

# View admin panel
# Navigate to: https://admin.portare-areu.local
```

### Step 6: Initial Configuration

1. **Access Admin Portal**
   - URL: `https://admin.portare-areu.local`
   - Default credentials: (see Admin Credentials section)

2. **Configure System Settings**
   - Set organization name and details
   - Configure regional parameters
   - Set up notification preferences

3. **Create Admin User**
   - Create dedicated admin account
   - Enable two-factor authentication
   - Set strong password policy

---

## Configuration

### Application Configuration

**Main Config File: `config/application.yml`**

```yaml
# Server Configuration
server:
  port: 8000
  host: 0.0.0.0
  environment: production
  workers: 4
  timeout: 30000

# Database Configuration
database:
  default: postgresql
  postgresql:
    host: ${DB_HOST}
    port: ${DB_PORT}
    name: ${DB_NAME}
    user: ${DB_USER}
    password: ${DB_PASSWORD}
    pool:
      min: 5
      max: 20
      idleTimeoutMillis: 30000
      reapIntervalMillis: 1000
  mongodb:
    uri: mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:27017

# Caching Configuration
cache:
  provider: redis
  redis:
    host: ${REDIS_HOST}
    port: ${REDIS_PORT}
    password: ${REDIS_PASSWORD}
    db: ${REDIS_DB}
    ttl: 3600

# Authentication Configuration
auth:
  jwt:
    secret: ${JWT_SECRET}
    algorithm: HS256
    expiry: 24h
    refreshTokenExpiry: 7d
  mfa:
    enabled: true
    providers:
      - totp
      - sms
      - email
  password_policy:
    minLength: 12
    requireUppercase: true
    requireNumbers: true
    requireSpecialChars: true
    expiryDays: 90

# Logging Configuration
logging:
  level: ${LOG_LEVEL}
  format: json
  transports:
    - type: console
      format: pretty
    - type: file
      filename: logs/app.log
      maxSize: 10m
      maxFiles: 14
    - type: syslog
      host: localhost
      port: 514

# API Rate Limiting
rateLimit:
  enabled: true
  windowMs: 900000
  maxRequests: 100
  keyGenerator: "ip"
  skip: ["GET /api/v1/health"]

# CORS Configuration
cors:
  origins: ${CORS_ORIGINS}
  methods: [GET, POST, PUT, DELETE, PATCH]
  allowedHeaders: [Content-Type, Authorization]
  credentials: true
  maxAge: 3600

# Security Headers
security:
  helmet:
    enabled: true
    contentSecurityPolicy: true
    frameGuard: true
    hsts:
      maxAge: 31536000
      includeSubDomains: true
      preload: true
```

### Service-Specific Configuration

**Patient Service: `services/patient-service/config.yml`**
```yaml
service:
  name: patient-service
  port: 8002
  logLevel: info
  
features:
  patientRecords: true
  medicalHistory: true
  allergiesTracking: true
  medicationsTracking: true
  
integrations:
  ehrSystem:
    enabled: true
    endpoint: https://ehr-system.local/api
    timeout: 30000
  labResults:
    enabled: true
    refresh: 3600000
  
gdpr:
  dataRetention: 7years
  anonymization: true
  rightToBeForgotten: true
```

---

## Admin Credentials

### ⚠️ IMPORTANT SECURITY NOTICE

**Change default credentials immediately after installation!** Default credentials are for initial setup only.

### Default Admin Account

| Field | Value | Action Required |
|-------|-------|-----------------|
| **Username** | `admin` | **CHANGE IMMEDIATELY** |
| **Email** | `admin@portare-areu.local` | Update to valid email |
| **Password** | `PortareAReu2025!Admin` | **CHANGE IMMEDIATELY** |
| **MFA Status** | Disabled | **ENABLE IMMEDIATELY** |
| **Role** | Super Administrator | Keep as is |

### Initial Login Process

1. **Navigate to**: `https://admin.portare-areu.local`
2. **Enter Credentials**:
   - Username: `admin`
   - Password: `PortareAReu2025!Admin`
3. **Complete Setup Wizard**:
   - Change password
   - Configure MFA
   - Set organization details
   - Configure email settings

### User Management Commands

```bash
# Create new admin user
docker-compose exec api npm run admin:create \
  --name="John Doe" \
  --email="john.doe@portare-areu.local" \
  --password="<strong-password>" \
  --role="admin"

# Reset admin password
docker-compose exec api npm run admin:reset-password \
  --username="admin" \
  --password="<new-strong-password>"

# Enable MFA for user
docker-compose exec api npm run mfa:enable \
  --username="admin" \
  --method="totp"

# List all admin users
docker-compose exec api npm run admin:list

# Deactivate user account
docker-compose exec api npm run user:deactivate \
  --username="old-user"
```

### Security Best Practices

✅ **DO:**
- Change default password immediately
- Enable MFA for all admin accounts
- Use strong, unique passwords (12+ characters)
- Rotate admin credentials quarterly
- Use separate accounts for different roles
- Monitor admin activity logs regularly
- Document who has admin access and when
- Use VPN for remote admin access

❌ **DON'T:**
- Share admin credentials
- Use same password across systems
- Store passwords in plaintext
- Give admin access to unnecessary users
- Access admin panel from untrusted networks
- Disable security features
- Keep default passwords in production

---

## API Overview

### Base URL
```
https://api.portare-areu.local/api/v1
```

### Authentication

All API requests require authentication via JWT Bearer token:

```bash
Authorization: Bearer <jwt-token>
```

**Obtain Token:**
```bash
curl -X POST https://api.portare-areu.local/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@portare-areu.local",
    "password": "password"
  }'

# Response
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

### Core API Endpoints

#### Authentication Endpoints
```
POST   /auth/login              - User login
POST   /auth/logout             - User logout
POST   /auth/refresh            - Refresh access token
POST   /auth/mfa/setup          - Setup MFA
POST   /auth/mfa/verify         - Verify MFA code
POST   /password-reset/request  - Request password reset
POST   /password-reset/confirm  - Confirm password reset
```

#### Patient Management
```
GET    /patients                - List all patients
GET    /patients/:id            - Get patient details
POST   /patients                - Create new patient
PUT    /patients/:id            - Update patient
DELETE /patients/:id            - Delete patient (soft delete)
GET    /patients/:id/history    - Get patient medical history
GET    /patients/:id/medications - Get patient medications
POST   /patients/:id/visits     - Record patient visit
```

#### Care Coordination
```
GET    /cases                   - List all care cases
GET    /cases/:id               - Get case details
POST   /cases                   - Create new case
PUT    /cases/:id               - Update case
GET    /cases/:id/timeline      - Get case timeline
POST   /cases/:id/notes         - Add case note
GET    /cases/:id/team          - Get case team members
```

#### Emergency Dispatch
```
GET    /emergencies             - List emergencies
GET    /emergencies/:id         - Get emergency details
POST   /emergencies             - Create emergency
PUT    /emergencies/:id         - Update emergency status
GET    /emergencies/:id/location - Get emergency location
POST   /emergencies/:id/dispatch - Dispatch resources
GET    /resources/available     - Get available resources
```

#### Analytics & Reporting
```
GET    /analytics/dashboard     - Get dashboard data
GET    /analytics/metrics       - Get system metrics
GET    /reports                 - List available reports
POST   /reports/generate        - Generate custom report
GET    /reports/:id             - Get report details
```

#### System Administration
```
GET    /users                   - List users
POST   /users                   - Create user
PUT    /users/:id               - Update user
DELETE /users/:id               - Delete user
GET    /roles                   - List available roles
GET    /permissions             - List permissions
POST   /audit-logs              - Get audit logs
GET    /system/health           - Get system health status
```

### Example Requests

**Get Patient Information:**
```bash
curl -X GET https://api.portare-areu.local/api/v1/patients/12345 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/json"
```

**Create Emergency Case:**
```bash
curl -X POST https://api.portare-areu.local/api/v1/cases \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": "12345",
    "case_type": "emergency",
    "priority": "high",
    "description": "Patient experiencing chest pain",
    "location": {
      "latitude": 45.4642,
      "longitude": 9.1900
    }
  }'
```

**Generate Report:**
```bash
curl -X POST https://api.portare-areu.local/api/v1/reports/generate \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "monthly_summary",
    "start_date": "2025-12-01",
    "end_date": "2025-12-31",
    "format": "pdf",
    "include_metrics": ["response_time", "resolution_rate", "patient_satisfaction"]
  }'
```

### Response Format

**Success Response (200):**
```json
{
  "success": true,
  "status": 200,
  "data": {
    "id": "12345",
    "name": "John Doe",
    "email": "john@portare-areu.local"
  },
  "timestamp": "2025-12-28T18:07:59Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "status": 400,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Missing required field: patient_id",
    "details": {
      "field": "patient_id",
      "reason": "required"
    }
  },
  "timestamp": "2025-12-28T18:07:59Z"
}
```

### Rate Limiting

All API endpoints are rate-limited:
- **Standard Users**: 100 requests per 15 minutes
- **Premium Users**: 1000 requests per 15 minutes
- **Service Accounts**: 5000 requests per 15 minutes

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1640709000
```

---

## Security Compliance

### Data Protection Standards

#### GDPR Compliance (EU)
- ✅ User consent management
- ✅ Data subject rights implementation
- ✅ Privacy by design
- ✅ Data minimization
- ✅ Purpose limitation
- ✅ Storage limitation
- ✅ Integrity & confidentiality
- ✅ Regular compliance audits

**GDPR Implementation:**
```yaml
gdpr:
  consent_tracking: enabled
  data_retention: 7years
  anonymization: true
  right_to_be_forgotten: enabled
  data_portability: enabled
  privacy_notices: required
  dpia_required: true
```

#### HIPAA Compliance (USA)
- ✅ Protected Health Information (PHI) encryption
- ✅ Access controls & authentication
- ✅ Audit controls & logging
- ✅ Integrity controls
- ✅ Business Associate Agreements
- ✅ Breach notification procedures

#### ISO 27001 Certification
- ✅ Information Security Management System (ISMS)
- ✅ Risk assessment & treatment
- ✅ Access control management
- ✅ Incident response procedures
- ✅ Business continuity planning

### Encryption Standards

**Data at Rest:**
```
Algorithm: AES-256-CBC
Key Management: HSM-backed key storage
Key Rotation: Annual
IV Generation: Cryptographically secure random
```

**Data in Transit:**
```
Protocol: TLS 1.3 (minimum)
Cipher Suite: TLS_AES_256_GCM_SHA384
Certificate: Let's Encrypt (auto-renewed)
HSTS: Enabled with preload
```

**Password Security:**
```
Algorithm: bcrypt with SHA-512
Cost Factor: 12
Hashing Iterations: 1000+
```

### Authentication & Authorization

**Multi-Factor Authentication (MFA):**
- Time-based One-Time Password (TOTP)
- SMS-based verification
- Email-based verification
- Hardware security keys (FIDO2)

**Role-Based Access Control (RBAC):**
```
Roles:
  - Super Administrator
  - Administrator
  - Supervisor
  - Medical Professional
  - Dispatch Operator
  - Support Staff
  - Auditor
  - Guest

Permissions:
  - read_patients
  - write_patients
  - delete_patients
  - create_cases
  - dispatch_emergency
  - generate_reports
  - manage_users
  - view_audit_logs
  - configure_system
```

### Vulnerability Management

**Security Testing:**
- Static Application Security Testing (SAST)
- Dynamic Application Security Testing (DAST)
- Software Composition Analysis (SCA)
- Infrastructure vulnerability scanning
- Penetration testing (quarterly)

**Automated Scanning:**
```bash
# Run security scan
docker-compose exec api npm run security:scan

# Generate SBOM
docker-compose exec api npm run sbom:generate

# Check dependencies
docker-compose exec api npm audit

# SAST scan
sonarqube-scanner
```

### Audit & Logging

**Audit Trail:**
- User login/logout events
- Data access & modifications
- Administrative actions
- System configuration changes
- API calls
- Error events

**Log Retention:**
- Standard Logs: 90 days
- Audit Logs: 7 years
- Security Events: 5 years

**Log Monitoring:**
```bash
# View audit logs
curl -X GET https://api.portare-areu.local/api/v1/audit-logs \
  -H "Authorization: Bearer $TOKEN"

# Export security events
curl -X POST https://api.portare-areu.local/api/v1/security/export \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"format": "csv", "days": 30}'
```

### Compliance Checklist

**Before Production Deployment:**
- [ ] Penetration testing completed
- [ ] Security audit passed
- [ ] GDPR assessment completed
- [ ] Data classification completed
- [ ] Encryption keys secured
- [ ] Backup & recovery tested
- [ ] Incident response plan approved
- [ ] SLA documents signed
- [ ] Business continuity plan reviewed
- [ ] Staff security training completed

---

## Deployment Instructions

### Deployment Strategies

#### 1. Docker Compose Deployment (Development/Small Scale)

```bash
# Pull latest changes
git pull origin main

# Update environment variables
nano .env

# Build and deploy
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Run migrations
docker-compose exec api npm run db:migrate

# Verify deployment
docker-compose ps
docker-compose logs -f api
```

#### 2. Kubernetes Deployment (Enterprise/Production)

**Prerequisites:**
```bash
- Kubernetes 1.25+
- Helm 3.10+
- kubectl configured
- Docker registry access
```

**Deploy with Helm:**
```bash
# Add Helm repository
helm repo add portare-areu https://charts.portare-areu.local
helm repo update

# Create namespace
kubectl create namespace portare-areu
kubectl config set-context --current --namespace=portare-areu

# Install release
helm install portare-areu portare-areu/portare-areu \
  --namespace portare-areu \
  -f values.yaml \
  --set image.tag=1.0.0

# Verify deployment
kubectl get pods -n portare-areu
kubectl get services -n portare-areu

# Check rollout status
kubectl rollout status deployment/portare-areu-api -n portare-areu
```

**Kubernetes Configuration (values.yaml):**
```yaml
replicaCount: 3

image:
  repository: chrimanna2006/portare-areu
  tag: "1.0.0"
  pullPolicy: IfNotPresent

service:
  type: LoadBalancer
  port: 443
  targetPort: 8000

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: api.portare-areu.local
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: portare-areu-tls
      hosts:
        - api.portare-areu.local

resources:
  requests:
    memory: "512Mi"
    cpu: "250m"
  limits:
    memory: "2Gi"
    cpu: "1000m"

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
  targetMemoryUtilizationPercentage: 80

postgresql:
  enabled: true
  auth:
    username: portare_user
    password: <strong-password>
  primary:
    persistence:
      enabled: true
      size: 50Gi

redis:
  enabled: true
  auth:
    password: <strong-password>
  master:
    persistence:
      enabled: true
      size: 10Gi

monitoring:
  enabled: true
  prometheus:
    enabled: true
  grafana:
    enabled: true
```

#### 3. Cloud Platform Deployment

**AWS ECS:**
```bash
# Create ECR repository
aws ecr create-repository --repository-name portare-areu

# Build and push image
docker build -t portare-areu:1.0.0 .
docker tag portare-areu:1.0.0 $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/portare-areu:1.0.0
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/portare-areu:1.0.0

# Deploy with CloudFormation
aws cloudformation create-stack \
  --stack-name portare-areu \
  --template-body file://cloudformation/template.yaml
```

**Azure Container Instances:**
```bash
# Build image
az acr build --registry portare-areu \
  --image portare-areu:1.0.0 \
  --file Dockerfile .

# Deploy
az container create \
  --resource-group portare-areu \
  --name portare-areu-app \
  --image portare-areu.azurecr.io/portare-areu:1.0.0 \
  --ports 80 443
```

### Deployment Checklist

**Pre-Deployment:**
- [ ] All tests passing
- [ ] Code review completed
- [ ] Security scan passed
- [ ] Database backups created
- [ ] Rollback plan documented
- [ ] Health checks configured
- [ ] Monitoring alerts set up
- [ ] Logging configured
- [ ] Stakeholders notified

**Deployment:**
- [ ] Environment variables updated
- [ ] Database migrations run
- [ ] Health endpoints verified
- [ ] Load balancer configured
- [ ] SSL certificates valid
- [ ] DNS records updated
- [ ] API endpoints responding

**Post-Deployment:**
- [ ] System health verified
- [ ] Performance baselines met
- [ ] Error rates normal
- [ ] User access validated
- [ ] Data consistency checked
- [ ] Backup jobs running
- [ ] Monitoring active
- [ ] Documentation updated

### Zero-Downtime Deployment

```bash
# Blue-Green Deployment
docker-compose -f docker-compose.blue.yml up -d
# Run migrations and tests on blue environment
docker-compose -f docker-compose.blue.yml exec api npm run test

# Switch traffic to blue
docker-compose -f docker-compose.green.yml down

# Or with Kubernetes
kubectl set image deployment/portare-areu-api \
  api=chrimanna2006/portare-areu:1.0.0 \
  --record

kubectl rollout status deployment/portare-areu-api
kubectl rollout history deployment/portare-areu-api
```

### Rollback Procedure

```bash
# Docker Rollback
docker pull chrimanna2006/portare-areu:0.9.9
docker-compose down
docker-compose up -d  # Uses previous image version

# Kubernetes Rollback
kubectl rollout undo deployment/portare-areu-api
kubectl rollout undo deployment/portare-areu-api --to-revision=2

# Database Rollback
docker-compose exec api npm run db:rollback
```

---

## Database Schema

### Core Tables

**users**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  role VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  mfa_enabled BOOLEAN DEFAULT false,
  mfa_secret VARCHAR(255),
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
```

**patients**
```sql
CREATE TABLE patients (
  id UUID PRIMARY KEY,
  medical_record_number VARCHAR(50) UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(10),
  phone VARCHAR(20),
  email VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100),
  blood_type VARCHAR(10),
  allergies TEXT,
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(20),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_patients_mrn ON patients(medical_record_number);
CREATE INDEX idx_patients_name ON patients(last_name, first_name);
```

**cases**
```sql
CREATE TABLE cases (
  id UUID PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES patients(id),
  case_type VARCHAR(50) NOT NULL,
  priority VARCHAR(20) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'open',
  assigned_to UUID REFERENCES users(id),
  location_latitude DECIMAL(10, 8),
  location_longitude DECIMAL(11, 8),
  location_address VARCHAR(255),
  initiated_by UUID NOT NULL REFERENCES users(id),
  resolved_at TIMESTAMP,
  resolution_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_cases_patient_id ON cases(patient_id);
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_assigned_to ON cases(assigned_to);
```

### Full Schema Documentation

Complete schema documentation available in: `docs/database-schema.md`

---

## Troubleshooting

### Common Issues

**Issue: Services failing to start**
```bash
# Check logs
docker-compose logs -f

# Verify environment variables
docker-compose config

# Check port availability
netstat -tuln | grep :8000

# Restart services
docker-compose restart
```

**Issue: Database connection errors**
```bash
# Verify database is running
docker-compose ps postgres

# Check database credentials
docker-compose exec postgres psql -U portare_user -c "SELECT 1"

# Check network connectivity
docker-compose exec api ping postgres
```

**Issue: Authentication failures**
```bash
# Verify JWT_SECRET is set
docker-compose config | grep JWT_SECRET

# Check user exists in database
docker-compose exec postgres psql -U portare_user -d portare_areu_db \
  -c "SELECT * FROM users WHERE email='admin@portare-areu.local';"

# Reset admin password
docker-compose exec api npm run admin:reset-password --username=admin
```

**Issue: High memory usage**
```bash
# Check resource usage
docker stats

# Review application logs
docker-compose logs --tail=100 api

# Adjust Docker resource limits
# Edit docker-compose.yml and set memory limits
```

### Performance Tuning

```bash
# Enable query logging
docker-compose exec postgres psql -U portare_user -d portare_areu_db \
  -c "ALTER SYSTEM SET log_min_duration_statement = 1000;"

# Analyze slow queries
docker-compose exec api npm run performance:analyze

# Optimize indexes
docker-compose exec postgres psql -U portare_user -d portare_areu_db \
  -c "REINDEX DATABASE portare_areu_db;"
```

### Getting Help

- **Documentation**: `/docs` directory
- **Issue Tracker**: GitHub Issues
- **Discord Community**: [Community Link]
- **Email Support**: support@portare-areu.local

---

## Support & Contributing

### Getting Support

**For Bug Reports:**
1. Check existing issues
2. Provide system details
3. Include error logs
4. Describe reproduction steps

**For Feature Requests:**
1. Search existing discussions
2. Explain use case
3. Suggest implementation

### Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

**Development Setup:**
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117.git

# Add upstream
git remote add upstream https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117.git

# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git commit -am "Add new feature"

# Push to your fork
git push origin feature/my-feature

# Create Pull Request
```

### Code Standards

- Use TypeScript
- Follow ESLint rules
- Write unit tests (target 80% coverage)
- Document public APIs
- Use meaningful commit messages

### License

This project is licensed under the MIT License - see `LICENSE` file for details.

---

## Changelog

### Version 1.0.0 (2025-12-28)
- Initial release
- Core functionality implemented
- GDPR and HIPAA compliance
- Kubernetes deployment support

### Roadmap

- [ ] Mobile app v2.0 with offline support
- [ ] AI-powered case prediction
- [ ] Enhanced analytics dashboard
- [ ] Multi-region federation
- [ ] Advanced telemedicine capabilities

---

## Quick Links

- 📖 [Full Documentation](./docs)
- 🐛 [Report a Bug](https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117/issues)
- 💡 [Request a Feature](https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117/discussions)
- 📧 [Contact Support](mailto:support@portare-areu.local)
- 🔐 [Security Policy](./SECURITY.md)

---

## Acknowledgments

This project is developed by the PORTARE AREU team with contributions from healthcare IT professionals, medical practitioners, and community members.

---

**Last Updated**: 2025-12-28 18:07:59 UTC

**Maintained by**: [@Chrimanna2006](https://github.com/Chrimanna2006)

---

*For the latest updates and information, visit [https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117](https://github.com/Chrimanna2006/PORTARE-AREU-CONTINUITA-ASSISTENZIALE-Ex-Guardia-Medica-116117)*
