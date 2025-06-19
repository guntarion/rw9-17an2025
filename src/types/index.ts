// Competition Types
export interface Competition {
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
    start: string;
    end: string;
    registration?: string;
  };
  category: 'decoration' | 'sports' | 'health' | 'bazaar';
  status: 'upcoming' | 'ongoing' | 'completed';
  theme?: string;
  judges?: string;
  participants?: number;
  image?: string;
  icon: string;
  color: string;
  schedule?: string;
  rules?: string;
  categories?: string[];
  dressCode?: string;
  duration?: string;
  focus?: string;
}

// Committee Types
export interface CommitteeMember {
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
  competition?: string;
  performance?: string;
}

export interface Committee {
  main: CommitteeMember[];
  coordinators: CommitteeMember[];
  support: CommitteeMember[];
  entertainment?: CommitteeMember[];
}

// Event Types
export interface EventInfo {
  title: string;
  theme: string;
  organizer: string;
  location: string;
  budgetPerRT: string;
  targetDate: string;
  description: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  description: string;
  time: {
    start: string;
    end: string;
  };
  location: string;
  type: 'ceremony' | 'competition' | 'entertainment';
  coordinator?: string;
  participants?: string;
  dress?: string;
  highlights?: string[];
}

export interface RTPerformance {
  rt: string;
  performance: string;
  description: string;
}

export interface DoorprizeCategory {
  category: string;
  items: string[];
}

export interface EventData {
  eventInfo: EventInfo;
  schedule: Record<string, ScheduleEvent[]>;
  rtPerformances: RTPerformance[];
  doorprizes: DoorprizeCategory[];
}

// Gallery Types
export interface GalleryPhoto {
  id: string;
  url: string;
  thumbnail?: string;
  caption: string;
  category: GalleryCategory;
  date: string;
  author?: string;
  competition?: string;
  rt?: string;
  tags: string[];
  likes?: number;
  comments?: number;
}

export type GalleryCategory = 
  | 'preparation' 
  | 'competition' 
  | 'entertainment' 
  | 'committee' 
  | 'general';

export interface GalleryCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface UploadGuidelines {
  maxFileSize: string;
  allowedFormats: string[];
  recommendedSize: string;
  captionMaxLength: number;
  tagsMaxCount: number;
  moderationRequired: boolean;
}

export interface GalleryData {
  photos: GalleryPhoto[];
  categories: GalleryCategoryInfo[];
  uploadGuidelines: UploadGuidelines;
}

// News/Updates Types
export interface NewsUpdate {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'announcement' | 'competition' | 'general' | 'urgent';
  featured: boolean;
  image?: string;
  tags: string[];
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'competition' | 'event' | 'logistics' | 'general';
  tags: string[];
  featured: boolean;
}

// Contact Types
export interface ContactInfo {
  name: string;
  role: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  emergency?: boolean;
}

// Form Types
export interface ContactForm {
  name: string;
  email?: string;
  phone: string;
  subject: string;
  message: string;
  category: 'competition' | 'general' | 'complaint' | 'suggestion';
}

// UI Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'interactive' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  image?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

// Countdown Timer Types
export interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  variant?: 'default' | 'compact' | 'hero';
  showLabels?: boolean;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// App State Types
export interface AppState {
  competitions: Competition[];
  committee: Committee;
  events: EventData;
  gallery: GalleryData;
  news: NewsUpdate[];
  faqs: FAQItem[];
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Utility Types
export type Status = 'loading' | 'success' | 'error' | 'idle';

export interface LoadingState {
  status: Status;
  error?: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: Record<number, string>;
    secondary: Record<number, string>;
    accent: Record<number, string>;
    neutral: Record<number, string>;
  };
  spacing: Record<number, string>;
  typography: {
    fontFamily: Record<string, string[]>;
    fontSize: Record<string, [string, { lineHeight: string }]>;
    fontWeight: Record<string, string>;
  };
}

// Meta/SEO Types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}