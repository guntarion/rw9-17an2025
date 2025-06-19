// src/data/landing-page-data.ts

/**
 * Static data for the landing page
 * Generic template data - customize for your specific use case
 */

export const heroData = {
  headline: "Welcome to Your Next.js Template",
  subheadline: "A modern, full-stack template with authentication, AI integration, and dashboard functionality",
  ctaButtonText: "Get Started", 
  ctaButtonLink: "/auth/register"
};

export const painPointsData = {
  headline: "Key Features of This Template",
  cards: [
    {
      title: "Authentication System",
      description: "Complete authentication with Google OAuth and email/password login, including role-based access control.",
      icon: "ClockIcon"
    },
    {
      title: "AI Integration",
      description: "Multiple AI provider integrations (OpenAI, DeepSeek, Anthropic, etc.) with streaming responses.",
      icon: "DatabaseIcon"
    },
    {
      title: "Modern UI Components",
      description: "Built with Radix UI and Tailwind CSS for a beautiful, responsive user interface.",
      icon: "CheckCircleIcon"
    },
    {
      title: "Full-Stack Ready",
      description: "Complete backend with MongoDB, file uploads, email services, and API routes.",
      icon: "FactoryIcon"
    }
  ]
};

export const featuresData = {
  headline: "Everything You Need to Build Modern Web Applications",
  features: [
    {
      title: "Next.js 15 with App Router",
      description: "Latest Next.js features with server components, streaming, and optimized performance.",
      icon: "PaletteIcon"
    },
    {
      title: "TypeScript & Tailwind CSS",
      description: "Fully typed codebase with modern styling using Tailwind CSS and custom components.",
      icon: "WorkflowIcon"
    },
    {
      title: "Database Integration",
      description: "MongoDB with Mongoose ODM for flexible data modeling and efficient queries.",
      icon: "RulerIcon"
    },
    {
      title: "File Upload & Storage",
      description: "DigitalOcean Spaces integration for scalable file storage and management.",
      icon: "TruckIcon"
    },
    {
      title: "Email Services",
      description: "Built-in email functionality for notifications, password resets, and user communication.",
      icon: "ChartIcon"
    }
  ]
};

export const benefitsData = {
  headline: "Why Choose This Template",
  benefits: [
    {
      title: "Production Ready",
      description: "Built with best practices and ready for deployment to production environments.",
      icon: "TimeIcon"
    },
    {
      title: "Scalable Architecture",
      description: "Designed to grow with your application needs and handle increasing user loads.",
      icon: "CoinsIcon"
    },
    {
      title: "Developer Experience",
      description: "Excellent DX with TypeScript, hot reload, and comprehensive tooling setup.",
      icon: "SmileIcon"
    },
    {
      title: "Security First",
      description: "Built-in security features including authentication, authorization, and data protection.",
      icon: "ShieldIcon"
    }
  ]
};

export const howItWorksData = {
  headline: "Getting Started is Simple",
  steps: [
    {
      number: 1,
      title: "Clone & Setup",
      description: "Clone the repository and install dependencies with npm or yarn"
    },
    {
      number: 2,
      title: "Configure",
      description: "Set up environment variables for database, auth, and AI providers"
    },
    {
      number: 3,
      title: "Customize",
      description: "Modify components, styling, and functionality to match your needs"
    },
    {
      number: 4,
      title: "Deploy",
      description: "Deploy to your preferred hosting platform (Vercel, Netlify, etc.)"
    },
    {
      number: 5,
      title: "Scale",
      description: "Add features and scale your application as your business grows"
    }
  ]
};