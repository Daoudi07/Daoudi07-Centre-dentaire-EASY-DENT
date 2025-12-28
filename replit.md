# Easy Dent - Centre Dentaire Website

## Overview

A premium dental clinic website for Centre Dentaire Easy Dent located in Port-de-Bouc, France. The site follows a "Medical Luxury" design aesthetic with a modern, minimalist approach featuring a white-dominant color palette with medical blue accents and gold luxury details. The application is a multi-page marketing website with contact form functionality, team profiles with Doctolib integration, and a before/after gallery showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom medical luxury theme (primary blue #0077B6, accent gold #D4AF37, navy #001F3F)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and page transitions
- **Typography**: Montserrat (headings) and Open Sans (body) via Google Fonts
- **State Management**: TanStack React Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints defined in shared routes with Zod validation
- **Build System**: Vite for frontend, esbuild for server bundling
- **Development**: Hot module replacement via Vite dev server

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema**: Contact messages table for form submissions
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)

### Project Structure
```
client/           # React frontend
  src/
    pages/        # Route components (Home, Clinic, Team, Gallery, Contact)
    components/   # Reusable UI components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API endpoint handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Patterns
- **Shared Schema Pattern**: Database schemas and API contracts defined in `shared/` folder, used by both frontend and backend
- **Type-Safe API**: Zod schemas validate both request inputs and response types
- **Component Composition**: Layout wrapper component handles header/footer, page components handle content
- **Form Handling**: React Hook Form with Zod resolver for validation

## External Dependencies

### Third-Party Services
- **Doctolib**: External booking links for each doctor's appointment scheduling
- **Google Fonts**: Montserrat and Open Sans typography
- **Imgur**: External image hosting for doctor profile photos

### Database
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Drizzle ORM**: Database toolkit for type-safe queries

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM with Zod integration
- `framer-motion`: Animation library
- `wouter`: Lightweight routing
- `react-hook-form`: Form state management
- `zod`: Schema validation