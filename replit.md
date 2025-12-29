# Richard Umzug - Moving Company Website

## Overview

This is a Next.js 16 application for "Richard Umzug," an Austrian moving company website. The platform serves as both a customer-facing website with service information, cost calculators, and request forms, as well as an admin dashboard for managing business operations. The site is built for the Austrian and European market, featuring German-language content and location-based pricing for cities across Austria.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 16 with App Router and React 19
- **Styling**: Tailwind CSS 4 with CSS variables for theming (dark navy + orange accent color scheme)
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: GSAP with ScrollTrigger and SplitText plugins for smooth page transitions
- **Forms**: React Hook Form with Zod validation schemas
- **Charts**: Chart.js with react-chartjs-2 for admin analytics

### Route Structure
- `app/(root)/*` - Public-facing pages (home, services, city pages, contact forms)
- `app/(admin)/dashboard/*` - Admin dashboard with sidebar navigation
- `app/(auth)/login/*` - Authentication pages (placeholder)
- `app/api/*` - REST API endpoints

### Backend Architecture
- **Database**: MongoDB with Mongoose ODM
- **Connection Pattern**: Cached connection pooling via `lib/db.ts` to prevent connection exhaustion
- **Models**: Separate Mongoose schemas for Cities, Services, Testimonials, MoveRequests, ClearanceRequests, and GlobalSettings
- **API Design**: RESTful endpoints under `/api/*` with standard CRUD operations

### Key Design Patterns
- **Server Components**: Default usage with client components marked explicitly with "use client"
- **Data Fetching**: Server-side data fetching in page components, client-side fetching for dynamic content
- **Form Validation**: Centralized Zod schemas in `lib/form-validation/` for consistent validation
- **Reusable Hooks**: Custom hooks for estimates calculation, global settings, mobile detection, and GSAP animations

### Component Organization
- `components/ui/` - Base UI components from shadcn/ui
- `components/home/` - Homepage sections (Hero, Services, Testimonials, etc.)
- `components/calculator/` - Moving cost calculator components
- `components/form/` - Form components for move and clearance requests
- `components/admin/` - Admin dashboard components
- `components/pages/` - Page-specific component compositions

## External Dependencies

### Database
- **MongoDB**: Primary database accessed via `MONGODB_URI` environment variable
- **Mongoose**: ODM for schema definition and database operations

### Third-Party Services
- No external payment processing or auth providers currently integrated
- WhatsApp integration via direct links for customer contact
- Google Reviews display (static data, no API integration)

### Key NPM Packages
- `mongoose` - MongoDB object modeling
- `gsap` with `@gsap/react` - Animation library
- `react-hook-form` with `@hookform/resolvers` - Form handling
- `zod` - Schema validation
- `chart.js` with `react-chartjs-2` - Analytics charts
- `embla-carousel-react` - Carousel/slider functionality
- `lucide-react` - Icon library

### Environment Variables Required
- `MONGODB_URI` - MongoDB connection string