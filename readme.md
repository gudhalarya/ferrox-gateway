## FERROX 
This is the project that i am currently working on with 
It is Something similar to cloudfare and kong .

I am aiming to learn and implement the various backend concepts i have  learned ( RUST - ACTIX WEB) .

## Phase 1: Reverse Proxy

Client → Forrex → Backend Service

Browser
   |
   v
+--------+
| Forrex |
+--------+
   |
   v
Backend

Features:

Accept HTTP requests
Forward requests
Forward headers
Return responses

At this stage i am aiming to  learn:

HTTP
Sockets
Async programming
Request lifecycle


## Phase 2: Routing Engine

routes:
  - path: /users
    service: user-service

  - path: /payments
    service: payment-service

Forrex decides where to send traffic.

Learn:

Routing
Configuration management
Parsing YAML/TOML/JSON

## Phase 3: Load Balancer

            ┌── Server 1
Client ───► Forrex
            ├── Server 2
            └── Server 3

Algorithms:

Round Robin
Least Connections
Weighted Round Robin
IP Hash

Learn:

Networking
Distributed systems

## Phase 4: Rate Limiter

User
  |
100 req/sec
  |
Forrex
  |
ALLOW 50
BLOCK 50

Algorithms:

Token Bucket
Leaky Bucket
Sliding Window

Learn:

Data structures
Concurrency
Redis

## Phase 5: Authentication Layer

JWT
API Keys
OAuth

Learn:

Security
Cryptography
Identity management

## Phase 6: Caching Layer

Request
   |
Cache Hit?
   |
 Yes ---> Return
 No  ---> Backend

Learn:

Redis
Cache invalidation
TTL strategies

## Phase 7: Service Discovery

Instead of:

user-service:
  10.0.0.5

Dynamic registration:

Service starts
     |
Registers itself
     |
Forrex discovers it

Learn:

Microservices
Registries
Heartbeats

## Phase 8: Observability

Metrics:

Requests/sec
Latency
Error rate

Logging:

INFO
WARN
ERROR

Tracing:

Request
 ├─ Service A
 ├─ Service B
 └─ Service C

Learn:

OpenTelemetry
Monitoring
Debugging production systems

## Phase 9: TLS Termination

HTTPS
  |
Forrex
  |
HTTP

Learn:

SSL/TLS
Certificates
Encryption

## Phase 10: Distributed Forrex

Multiple Forrex instances:

          LB
           |
   ----------------
   |      |       |
Forrex Forrex Forrex



## This project is open to contribution and i would love to work with other guys --->