# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for HUT RI Ke-80 (Indonesian Independence Day) celebration at RW IX, Wedoro Village, Sidoarjo. The website serves as an information hub, media publication platform, and documentation center for community events with an environmental theme.

## Development Commands

### Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run typecheck

# Combined check (lint + typecheck)
npm run check
```

### Before Committing

Always run `npm run check` before committing to ensure code quality.

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom environmental theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React, Tabler Icons, React Icons
- **Image Handling**: Next.js Image optimization with Sharp
- **Data Management**: JSON files in `/src/data/` directory

### Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (WebsiteLayout)/       # Layout group for public pages
│   ├── api/                   # API routes
│   ├── css/                   # Global styles and themes
│   ├── lomba/                 # Competition pages with dynamic routes
│   ├── galeri/                # Gallery pages
│   ├── panitia/               # Committee pages
│   └── [various pages]        # Other website pages
├── components/
│   ├── features/              # Feature-specific components
│   ├── lomba/                 # Competition-specific components
│   ├── shared/                # Shared utility components
│   ├── theme/                 # Theme provider components
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   └── website/               # Website layout components
├── data/                      # Static JSON data files
│   ├── competitions.json      # Competition information
│   ├── committee.json         # Committee member data
│   ├── events.json           # Event timeline data
│   └── gallery.json          # Gallery structure
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── types/                     # TypeScript type definitions
└── utils/                     # Additional utilities
```

### Key Design Patterns

#### Data Management

- Static JSON files in `/src/data/` serve as the content source
- Competition data is structured with detailed metadata including coordinators, criteria, timelines, and prizes
- Gallery data is organized by year and event category
- Type-safe data access through TypeScript interfaces

#### Styling System

- Custom environmental theme with green color palette
- Primary colors: Forest Green (#22c55e), Earth Brown (#ca9a7c), Fresh Green (#84cc16)
- Responsive design with mobile-first approach
- Custom animations and shadows for environmental feel
- Typography optimized for Indonesian content (Inter + Poppins)

#### Component Architecture

- shadcn/ui components for consistent UI patterns
- Feature-specific components in `/src/components/features/`
- Competition components organized by lomba type
- Shared components for common functionality (breadcrumbs, headers, loading states)

#### Routing Structure

- App Router with layout groups
- Dynamic routes for competitions: `/lomba/[slug]`
- Website layout wrapper for public pages
- API routes for markdown processing

### Important Configuration

#### Image Optimization

- Configured domains in `next.config.js` for external images
- Server action body size limit: 2MB
- Image components use Next.js optimization by default

#### TypeScript Configuration

- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- ES2017 target for broad browser compatibility

#### Tailwind Configuration

- Custom environmental color system
- Extended spacing, shadows, and animations
- Container configuration for responsive layouts
- Custom gradient definitions

### Competition System

The website features four main competitions:

1. **Lomba Lingkungan Hidup** - Environmental competition with RT decoration
2. **Lomba Fun Badminton** - Family badminton tournament
3. **Parade Jalan Sehat** - Healthy walk competition with 500 participants
4. **Lomba Bazaar** - Environmental-themed bazaar with 11 RT participants

Each competition has detailed metadata including coordinators, criteria, timelines, judges, and prize structures.

### Content Management

- Static content managed through JSON files
- Images organized by year and event type in `/public/images/event/`
- Committee photos and coordinator information in structured format
- Markdown support for dynamic content through API routes

### Development Guidelines

- Always use TypeScript for type safety
- Follow the existing environmental theme color scheme
- Maintain responsive design patterns
- Use shadcn/ui components when possible
- Keep competition data in JSON format for easy updates
- Optimize images using Next.js Image component
- Test on mobile devices due to target audience usage patterns
