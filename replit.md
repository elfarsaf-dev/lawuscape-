# Replit.md

## Overview

This is a full-stack web application for property rental booking, specifically focused on glamping and villa accommodations in Indonesia. The application allows users to browse properties, view detailed information, and search through available accommodations with features like pricing, facilities, and capacity details.

The application follows a modern web architecture with a React frontend, Express.js backend, and uses a shared schema approach for type safety across the entire stack.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for production bundling
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

### Database Design
- **Database**: PostgreSQL (configured via Neon serverless)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Shared schema between client and server using Zod
- **Migrations**: Drizzle Kit for schema migrations

### Data Storage Strategy
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL with connection pooling via Neon serverless
- **Schema**: Strongly typed with shared interfaces between frontend and backend

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL storage
- **Type Safety**: End-to-end type safety with shared Zod schemas
- **API Security**: CORS configuration and secure session cookies

### Development Workflow
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Checking**: Unified TypeScript configuration across client/server
- **Code Organization**: Monorepo structure with shared types and utilities

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database schema management and migrations
- **express**: Web application framework for Node.js
- **wouter**: Lightweight router for React applications

### UI and Styling
- **@radix-ui/***: Comprehensive collection of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### State Management and Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for Node.js

### Validation and Utilities
- **zod**: TypeScript-first schema validation
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique ID generator