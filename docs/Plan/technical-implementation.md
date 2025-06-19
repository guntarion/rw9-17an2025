# Technical Implementation Plan - RW IX 17 Agustusan Website

## Component Architecture

### Core Components

#### 1. Layout Components
```typescript
// /src/components/layout/Header.tsx
interface HeaderProps {
  currentPage?: string;
  showCountdown?: boolean;
}

// /src/components/layout/Footer.tsx
interface FooterProps {
  showSocialLinks?: boolean;
  showContactInfo?: boolean;
}

// /src/components/layout/Navigation.tsx
interface NavigationProps {
  mobile?: boolean;
  currentPath: string;
}
```

#### 2. Feature Components
```typescript
// /src/components/features/CountdownTimer.tsx
interface CountdownTimerProps {
  targetDate: Date;
  showDays?: boolean;
  variant?: 'default' | 'compact' | 'hero';
}

// /src/components/features/CompetitionCard.tsx
interface CompetitionCardProps {
  competition: Competition;
  showProgress?: boolean;
  variant?: 'card' | 'detailed';
}

// /src/components/features/GalleryGrid.tsx
interface GalleryGridProps {
  photos: GalleryPhoto[];
  category?: GalleryCategory;
  columns?: number;
  showUpload?: boolean;
}

// /src/components/features/CommitteeProfile.tsx
interface CommitteeProfileProps {
  member: CommitteeMember;
  showContact?: boolean;
  variant?: 'card' | 'detailed';
}

// /src/components/features/NewsUpdateFeed.tsx
interface NewsUpdateFeedProps {
  updates: NewsUpdate[];
  limit?: number;
  showDate?: boolean;
}
```

#### 3. UI Components
```typescript
// /src/components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
}

// /src/components/ui/Card.tsx
interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  badge?: string;
  className?: string;
}

// /src/components/ui/Modal.tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

## Data Structure

### 1. Competition Data
```typescript
// /src/types/competition.ts
interface Competition {
  id: string;
  name: string;
  description: string;
  coordinator: {
    name: string;
    contact: string;
    photo?: string;
  };
  criteria: string[];
  timeline: {
    start: Date;
    end: Date;
    registration?: Date;
  };
  category: 'decoration' | 'sports' | 'health' | 'bazaar';
  status: 'upcoming' | 'ongoing' | 'completed';
  participants?: Participant[];
  gallery?: string[];
}

// /src/data/competitions.json
{
  "competitions": [
    {
      "id": "hias-kampung",
      "name": "Lomba Hias Kampung/RT",
      "description": "Lomba menghias kampung dengan tema Lingkungan Hidup",
      "coordinator": {
        "name": "H. Suleman",
        "contact": "+62xxx",
        "photo": "/images/coordinators/suleman.jpg"
      },
      "criteria": [
        "Penghijauan kampung/RT",
        "Kebersihan kampung/RT", 
        "Menghias kampung/RT"
      ],
      "timeline": {
        "start": "2025-07-01",
        "end": "2025-08-24",
        "registration": "2025-06-30"
      },
      "category": "decoration",
      "status": "upcoming"
    }
    // ... other competitions
  ]
}
```

### 2. Committee Data
```typescript
// /src/types/committee.ts
interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  rt?: string;
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
  photo?: string;
  bio?: string;
  responsibilities: string[];
}

// /src/data/committee.json
{
  "committee": {
    "main": [
      {
        "id": "ketua-panitia",
        "name": "Ketua Panitia RT 11",
        "role": "Ketua Panitia Pelaksana",
        "rt": "RT 11",
        "contact": {
          "phone": "+62xxx",
          "whatsapp": "+62xxx"
        },
        "responsibilities": [
          "Koordinasi keseluruhan acara",
          "Liaison dengan RW 09",
          "Supervisi semua lomba"
        ]
      }
    ],
    "coordinators": [
      {
        "id": "suleman",
        "name": "H. Suleman", 
        "role": "Koordinator Lomba Hias Kampung",
        "contact": {
          "whatsapp": "+62xxx"
        },
        "responsibilities": [
          "Koordinasi lomba hias kampung",
          "Pencarian juri eksternal",
          "Penilaian dan dokumentasi"
        ]
      }
      // ... other coordinators
    ],
    "support": [
      {
        "id": "ketua-rw",
        "name": "Made Ascayas Madianto",
        "role": "Ketua RW 09",
        "contact": {
          "phone": "+62xxx"
        },
        "responsibilities": [
          "Dukungan administratif",
          "Koordinasi antar RT",
          "Pengawasan budget"
        ]
      }
    ]
  }
}
```

### 3. Gallery Data
```typescript
// /src/types/gallery.ts
interface GalleryPhoto {
  id: string;
  url: string;
  thumbnail?: string;
  caption: string;
  category: GalleryCategory;
  date: Date;
  author?: string;
  competition?: string;
  rt?: string;
  tags: string[];
}

type GalleryCategory = 
  | 'preparation' 
  | 'competition' 
  | 'entertainment' 
  | 'committee' 
  | 'general';

// /src/data/gallery.json
{
  "photos": [
    {
      "id": "prep-001",
      "url": "/images/gallery/preparation-001.jpg",
      "thumbnail": "/images/gallery/thumbs/preparation-001.jpg",
      "caption": "Persiapan lomba hias kampung RT 05",
      "category": "preparation",
      "date": "2025-07-15",
      "competition": "hias-kampung",
      "rt": "RT 05",
      "tags": ["persiapan", "penghijauan", "gotong-royong"]
    }
  ]
}
```

### 4. Events & Timeline
```typescript
// /src/types/events.ts
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: {
    start: string;
    end: string;
  };
  location?: string;
  type: 'competition' | 'entertainment' | 'ceremony';
  participants?: string[];
  status: 'scheduled' | 'ongoing' | 'completed';
}

// /src/data/events.json
{
  "schedule": {
    "2025-08-30": [
      {
        "id": "opening-ceremony",
        "title": "Pembukaan Acara",
        "description": "Upacara pembukaan HUT RI Ke-80",
        "time": {
          "start": "08:00",
          "end": "09:00"
        },
        "location": "Balai RW IX",
        "type": "ceremony"
      },
      {
        "id": "badminton-day1",
        "title": "Lomba Bulu Tangkis Keluarga - Hari 1",
        "description": "Pertandingan babak penyisihan",
        "time": {
          "start": "19:00", 
          "end": "22:00"
        },
        "location": "Lapangan Bulu Tangkis RW IX",
        "type": "competition"
      }
    ],
    "2025-08-31": [
      {
        "id": "healthy-walk",
        "title": "Lomba Jalan Sehat",
        "description": "Jalan sehat dengan tema lingkungan hidup",
        "time": {
          "start": "06:00",
          "end": "08:00"
        },
        "type": "competition"
      },
      {
        "id": "entertainment-show",
        "title": "Panggung Hiburan & Doorprize",
        "description": "Penampilan angklung, tari, dan doorprize",
        "time": {
          "start": "19:00",
          "end": "22:00"
        },
        "type": "entertainment"
      }
    ]
  }
}
```

## Pages Implementation

### 1. Homepage (/)
```typescript
// /src/app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section dengan Countdown */}
      <HeroSection />
      
      {/* Event Overview */}
      <EventOverview />
      
      {/* Quick Stats */}
      <QuickStats />
      
      {/* Latest Updates */}
      <LatestUpdates limit={3} />
      
      {/* Competition Highlights */}
      <CompetitionHighlights />
      
      {/* Call to Action */}
      <CTASection />
    </div>
  );
}
```

### 2. Competition Pages (/lomba)
```typescript
// /src/app/lomba/page.tsx
export default function CompetitionsPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader 
        title="Lomba & Kompetisi"
        description="4 kategori lomba dengan tema Lingkungan Hidup"
      />
      
      <CompetitionTabs />
      
      <CompetitionGrid competitions={competitions} />
    </div>
  );
}

// /src/app/lomba/[slug]/page.tsx
export default function CompetitionDetailPage({ params }: { params: { slug: string } }) {
  const competition = getCompetitionBySlug(params.slug);
  
  return (
    <div className="container mx-auto py-8">
      <CompetitionHero competition={competition} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CompetitionDetails competition={competition} />
          <CompetitionGallery competition={competition} />
        </div>
        
        <div className="lg:col-span-1">
          <CompetitionSidebar competition={competition} />
        </div>
      </div>
    </div>
  );
}
```

### 3. Gallery Page (/galeri)
```typescript
// /src/app/galeri/page.tsx
export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  
  return (
    <div className="container mx-auto py-8">
      <PageHeader 
        title="Galeri & Updates"
        description="Dokumentasi persiapan dan pelaksanaan acara"
      />
      
      <GalleryFilters 
        activeFilter={filter} 
        onFilterChange={setFilter} 
      />
      
      <GalleryGrid 
        photos={filteredPhotos} 
        columns={3}
        showUpload={true}
      />
      
      <LoadMoreButton />
    </div>
  );
}
```

## Styling Implementation

### 1. Tailwind Configuration
```typescript
// tailwind.config.ts
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Green Theme Colors
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7', 
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f2e8e1',
          200: '#eaddd7',
          300: '#e0cfc5',
          400: '#d2b8a3',
          500: '#ca9a7c', // Earth brown
          600: '#a16207',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        accent: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16', // Fresh green
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### 2. Global Styles
```css
/* /src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --accent: 84.8 85.2% 40.4%;
    --accent-foreground: 222.2 84% 4.9%;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors;
  }
  
  .btn-secondary {
    @apply bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-sm border border-gray-100 p-6;
  }
  
  .section-padding {
    @apply py-16 px-4 sm:px-6 lg:px-8;
  }
  
  .container-custom {
    @apply max-w-7xl mx-auto;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .bg-gradient-green {
    background: linear-gradient(135deg, theme(colors.primary.400) 0%, theme(colors.accent.500) 100%);
  }
  
  .bg-gradient-earth {
    background: linear-gradient(135deg, theme(colors.secondary.400) 0%, theme(colors.primary.600) 100%);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: theme(colors.primary.400);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: theme(colors.primary.500);
}
```

## State Management

### 1. Context Providers
```typescript
// /src/contexts/AppContext.tsx
interface AppContextType {
  // Global state
  currentUser?: User;
  competitions: Competition[];
  events: Event[];
  gallery: GalleryPhoto[];
  
  // Actions
  updateCompetitions: (competitions: Competition[]) => void;
  addGalleryPhoto: (photo: GalleryPhoto) => void;
  updateEvent: (event: Event) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  
  const value = {
    ...state,
    updateCompetitions: (competitions: Competition[]) => {
      setState(prev => ({ ...prev, competitions }));
    },
    addGalleryPhoto: (photo: GalleryPhoto) => {
      setState(prev => ({ 
        ...prev, 
        gallery: [photo, ...prev.gallery] 
      }));
    },
    updateEvent: (event: Event) => {
      setState(prev => ({
        ...prev,
        events: prev.events.map(e => e.id === event.id ? event : e)
      }));
    }
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
```

### 2. Custom Hooks
```typescript
// /src/hooks/useCountdown.ts
export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  return timeLeft;
}

// /src/hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue] as const;
}
```

## Performance Optimization

### 1. Image Optimization
```typescript
// /src/components/ui/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

### 2. Lazy Loading Components
```typescript
// /src/components/LazyComponents.tsx
import dynamic from 'next/dynamic';

export const LazyGalleryGrid = dynamic(() => import('./features/GalleryGrid'), {
  loading: () => <GalleryGridSkeleton />,
  ssr: false
});

export const LazyCompetitionDetails = dynamic(() => import('./features/CompetitionDetails'), {
  loading: () => <CompetitionDetailsSkeleton />
});

export const LazyNewsUpdateFeed = dynamic(() => import('./features/NewsUpdateFeed'), {
  loading: () => <NewsUpdateFeedSkeleton />
});
```

## SEO & Meta Tags

### 1. Metadata Configuration
```typescript
// /src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | HUT RI Ke-80 RW IX Sidoarjo',
    default: 'HUT RI Ke-80 RW IX Sidoarjo - Lingkungan Hidup dan Penghijauan'
  },
  description: 'Situs resmi peringatan HUT RI Ke-80 RW IX Desa Wedoro, Sidoarjo dengan tema Lingkungan Hidup dan Penghijauan. Informasi lomba, acara, dan dokumentasi.',
  keywords: ['HUT RI', 'RW IX', 'Sidoarjo', 'Lingkungan Hidup', 'Penghijauan', 'Lomba', '17 Agustus'],
  authors: [{ name: 'Panitia RT 11 RW IX' }],
  creator: 'RT 11 RW IX Sidoarjo',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://rw9-17an2025.vercel.app',
    siteName: 'HUT RI Ke-80 RW IX Sidoarjo',
    title: 'HUT RI Ke-80 RW IX Sidoarjo',
    description: 'Peringatan HUT RI Ke-80 dengan tema Lingkungan Hidup dan Penghijauan',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HUT RI Ke-80 RW IX Sidoarjo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUT RI Ke-80 RW IX Sidoarjo',
    description: 'Peringatan HUT RI Ke-80 dengan tema Lingkungan Hidup dan Penghijauan',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};
```

## Deployment & CI/CD

### 1. Vercel Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "src/pages/api/**/*.ts": {
      "runtime": "@vercel/node"
    }
  },
  "redirects": [
    {
      "source": "/lomba-hias",
      "destination": "/lomba/hias-kampung",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 2. Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://rw9-17an2025.vercel.app
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_COUNTDOWN_TARGET_DATE=2025-08-30T08:00:00+07:00

# Optional API keys for future features
NEXT_PUBLIC_UPLOAD_API_KEY=your-upload-api-key
NEXT_PUBLIC_MAPS_API_KEY=your-google-maps-api-key

# Admin features (future)
ADMIN_SECRET_KEY=your-admin-secret
DATABASE_URL=your-database-url
```

---

**Document Version**: 1.0  
**Created**: June 19, 2025  
**Last Updated**: June 19, 2025  
**Technical Lead**: Development Team
