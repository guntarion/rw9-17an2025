# Component Library & Design System

## Design Tokens

### Color System
```typescript
// /src/lib/design-tokens.ts
export const colors = {
  // Primary Green Palette
  primary: {
    50: '#f0fdf4',   // Very light green
    100: '#dcfce7',  // Light green
    200: '#bbf7d0',  // Soft green
    300: '#86efac',  // Medium light green
    400: '#4ade80',  // Medium green
    500: '#22c55e',  // Main brand green
    600: '#16a34a',  // Darker green
    700: '#15803d',  // Dark green
    800: '#166534',  // Very dark green
    900: '#14532d',  // Deepest green
  },
  
  // Secondary Earth Palette
  secondary: {
    50: '#fdf8f6',   // Very light earth
    100: '#f2e8e1',  // Light earth
    200: '#eaddd7',  // Soft earth
    300: '#e0cfc5',  // Medium light earth
    400: '#d2b8a3',  // Medium earth
    500: '#ca9a7c',  // Main earth tone
    600: '#a16207',  // Darker earth
    700: '#92400e',  // Dark earth
    800: '#78350f',  // Very dark earth
    900: '#451a03',  // Deepest earth
  },
  
  // Accent Fresh Green
  accent: {
    50: '#f7fee7',   // Very light fresh
    100: '#ecfccb',  // Light fresh
    200: '#d9f99d',  // Soft fresh
    300: '#bef264',  // Medium light fresh
    400: '#a3e635',  // Medium fresh
    500: '#84cc16',  // Main fresh green
    600: '#65a30d',  // Darker fresh
    700: '#4d7c0f',  // Dark fresh
    800: '#365314',  // Very dark fresh
    900: '#1a2e05',  // Deepest fresh
  },
  
  // Neutral Palette
  neutral: {
    0: '#ffffff',    // Pure white
    50: '#fafafa',   // Off white
    100: '#f5f5f5',  // Light gray
    200: '#e5e5e5',  // Soft gray
    300: '#d4d4d4',  // Medium light gray
    400: '#a3a3a3',  // Medium gray
    500: '#737373',  // Main gray
    600: '#525252',  // Darker gray
    700: '#404040',  // Dark gray
    800: '#262626',  // Very dark gray
    900: '#171717',  // Almost black
    1000: '#000000', // Pure black
  },
  
  // Semantic Colors
  success: '#10b981',  // Green
  warning: '#f59e0b',  // Amber
  error: '#ef4444',    // Red
  info: '#3b82f6',     // Blue
} as const;

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px',
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'monospace'],
  },
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],
    base: ['16px', { lineHeight: '24px' }],
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '28px' }],
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '36px' }],
    '4xl': ['36px', { lineHeight: '40px' }],
    '5xl': ['48px', { lineHeight: '1' }],
    '6xl': ['60px', { lineHeight: '1' }],
    '7xl': ['72px', { lineHeight: '1' }],
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;
```

## Base Components

### 1. Button Component
```typescript
// /src/components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
        outline: 'border border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
        ghost: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
        success: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
        warning: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
        danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  loading,
  icon,
  iconPosition = 'left',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}
```

### 2. Card Component
```typescript
// /src/components/ui/Card.tsx
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-xl border bg-white transition-all',
  {
    variants: {
      variant: {
        default: 'border-gray-200 shadow-sm hover:shadow-md',
        elevated: 'border-gray-100 shadow-md hover:shadow-lg',
        interactive: 'border-gray-200 shadow-sm hover:shadow-md hover:border-primary-200 cursor-pointer',
        gradient: 'border-0 bg-gradient-to-br from-primary-50 to-accent-50 shadow-sm',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  description?: string;
  image?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
}

export function Card({
  className,
  variant,
  padding,
  title,
  description,
  image,
  badge,
  actions,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title || ''}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <div className={image ? 'p-6' : ''}>
        {(title || badge) && (
          <div className="mb-4 flex items-start justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-gray-600">
                  {description}
                </p>
              )}
            </div>
            {badge && (
              <div className="ml-4 flex-shrink-0">
                {badge}
              </div>
            )}
          </div>
        )}
        
        {children}
        
        {actions && (
          <div className="mt-4 flex items-center justify-end space-x-2">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-gray-600', className)} {...props} />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props} />
  );
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
  );
}
```

### 3. Badge Component
```typescript
// /src/components/ui/Badge.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        accent: 'bg-accent-100 text-accent-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-amber-100 text-amber-800',
        danger: 'bg-red-100 text-red-800',
        outline: 'border border-gray-200 text-gray-600',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
}
```

### 4. Input Component
```typescript
// /src/components/ui/Input.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-300 hover:border-gray-400',
        error: 'border-red-300 hover:border-red-400 focus-visible:ring-red-500',
        success: 'border-green-300 hover:border-green-400 focus-visible:ring-green-500',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    icon, 
    iconPosition = 'left',
    id,
    ...props 
  }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const hasError = !!error;
    const finalVariant = hasError ? 'error' : variant;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: finalVariant, size }),
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            error ? 'text-red-600' : 'text-gray-500'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

## Feature Components

### 1. Countdown Timer
```typescript
// /src/components/features/CountdownTimer.tsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  variant?: 'default' | 'compact' | 'hero';
  showLabels?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ 
  targetDate, 
  className,
  variant = 'default',
  showLabels = true 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    function calculateTimeLeft(): TimeLeft {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return <div className="animate-pulse h-20 bg-gray-200 rounded-lg" />;
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Hari', short: 'H' },
    { value: timeLeft.hours, label: 'Jam', short: 'J' },
    { value: timeLeft.minutes, label: 'Menit', short: 'M' },
    { value: timeLeft.seconds, label: 'Detik', short: 'D' },
  ];

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className={cn('text-center', className)}>
        <div className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-full">
          🎉 Acara Sedang Berlangsung!
        </div>
      </div>
    );
  }

  const variants = {
    default: 'grid grid-cols-4 gap-4',
    compact: 'flex items-center space-x-2',
    hero: 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8',
  };

  const numberStyle = {
    default: 'text-2xl md:text-3xl font-bold',
    compact: 'text-lg font-semibold',
    hero: 'text-4xl md:text-6xl font-bold',
  };

  const labelStyle = {
    default: 'text-sm text-gray-600',
    compact: 'text-xs text-gray-500',
    hero: 'text-base md:text-lg text-gray-600',
  };

  if (variant === 'compact') {
    return (
      <div className={cn('inline-flex items-center space-x-1 text-primary-600', className)}>
        {timeUnits.map((unit, index) => (
          <span key={unit.label} className="flex items-center">
            <span className="font-semibold">{unit.value.toString().padStart(2, '0')}</span>
            <span className="text-xs ml-0.5">{unit.short}</span>
            {index < timeUnits.length - 1 && <span className="mx-1">:</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(variants[variant], className)}>
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className={cn(
            'bg-white border-2 border-primary-200 rounded-xl p-4 shadow-sm',
            variant === 'hero' && 'p-6 md:p-8'
          )}>
            <div className={cn('text-primary-600', numberStyle[variant])}>
              {unit.value.toString().padStart(2, '0')}
            </div>
            {showLabels && (
              <div className={cn('mt-1', labelStyle[variant])}>
                {unit.label}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 2. Competition Card
```typescript
// /src/components/features/CompetitionCard.tsx
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, User, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';

interface Competition {
  id: string;
  name: string;
  description: string;
  coordinator: {
    name: string;
    contact: string;
  };
  timeline: {
    start: string;
    end: string;
  };
  category: 'decoration' | 'sports' | 'health' | 'bazaar';
  status: 'upcoming' | 'ongoing' | 'completed';
  image?: string;
  participants?: number;
}

interface CompetitionCardProps {
  competition: Competition;
  variant?: 'card' | 'detailed';
  showProgress?: boolean;
  className?: string;
}

const categoryConfig = {
  decoration: {
    color: 'primary',
    icon: '🏡',
    label: 'Dekorasi',
  },
  sports: {
    color: 'accent',
    icon: '🏸',
    label: 'Olahraga',
  },
  health: {
    color: 'success',
    icon: '🚶‍♂️',
    label: 'Kesehatan',
  },
  bazaar: {
    color: 'secondary',
    icon: '🛍️',
    label: 'Bazaar',
  },
} as const;

const statusConfig = {
  upcoming: {
    color: 'warning',
    label: 'Akan Datang',
  },
  ongoing: {
    color: 'success',
    label: 'Sedang Berlangsung',
  },
  completed: {
    color: 'default',
    label: 'Selesai',
  },
} as const;

export function CompetitionCard({ 
  competition, 
  variant = 'card',
  showProgress = false,
  className 
}: CompetitionCardProps) {
  const categoryInfo = categoryConfig[competition.category];
  const statusInfo = statusConfig[competition.status];
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (variant === 'detailed') {
    return (
      <Card 
        variant="interactive" 
        className={className}
        image={competition.image}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{categoryInfo.icon}</span>
            <Badge variant={categoryInfo.color as any}>
              {categoryInfo.label}
            </Badge>
          </div>
          <Badge variant={statusInfo.color as any}>
            {statusInfo.label}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {competition.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {competition.description}
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>
              {formatDate(competition.timeline.start)} - {formatDate(competition.timeline.end)}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-2" />
            <span>Koordinator: {competition.coordinator.name}</span>
          </div>
          
          {competition.participants && (
            <div className="flex items-center text-sm text-gray-500">
              <Trophy className="w-4 h-4 mr-2" />
              <span>{competition.participants} peserta terdaftar</span>
            </div>
          )}
        </div>
        
        {showProgress && competition.status === 'ongoing' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all" 
                style={{ width: '75%' }}
              />
            </div>
          </div>
        )}
        
        <Link href={`/lomba/${competition.id}`}>
          <Button className="w-full">
            Lihat Detail
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card 
      variant="interactive" 
      className={className}
      padding="sm"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-xl">
            {categoryInfo.icon}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <Badge variant={categoryInfo.color as any} size="sm">
              {categoryInfo.label}
            </Badge>
            <Badge variant={statusInfo.color as any} size="sm">
              {statusInfo.label}
            </Badge>
          </div>
          
          <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
            {competition.name}
          </h4>
          
          <p className="text-xs text-gray-500 line-clamp-2 mb-2">
            {competition.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {formatDate(competition.timeline.end)}
            </span>
            <Link href={`/lomba/${competition.id}`}>
              <Button size="sm" variant="outline">
                Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
```

### 3. Gallery Grid Component
```typescript
// /src/components/features/GalleryGrid.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Upload, Heart, MessageSquare, Share2, Calendar } from 'lucide-react';
import Image from 'next/image';

interface GalleryPhoto {
  id: string;
  url: string;
  thumbnail?: string;
  caption: string;
  category: 'preparation' | 'competition' | 'entertainment' | 'committee' | 'general';
  date: string;
  author?: string;
  competition?: string;
  rt?: string;
  tags: string[];
  likes?: number;
  comments?: number;
}

interface GalleryGridProps {
  photos: GalleryPhoto[];
  category?: GalleryPhoto['category'] | 'all';
  columns?: number;
  showUpload?: boolean;
  onUpload?: () => void;
  className?: string;
}

const categoryConfig = {
  preparation: { label: 'Persiapan', color: 'primary', icon: '🔨' },
  competition: { label: 'Lomba', color: 'accent', icon: '🏆' },
  entertainment: { label: 'Hiburan', color: 'secondary', icon: '🎭' },
  committee: { label: 'Panitia', color: 'success', icon: '👥' },
  general: { label: 'Umum', color: 'default', icon: '📸' },
} as const;

export function GalleryGrid({ 
  photos, 
  category = 'all',
  columns = 3,
  showUpload = false,
  onUpload,
  className 
}: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  
  const filteredPhotos = category === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={className}>
      {/* Upload Button */}
      {showUpload && (
        <Card 
          variant="interactive" 
          className="mb-6 border-dashed border-2 border-primary-300 bg-primary-50"
          onClick={onUpload}
        >
          <div className="text-center py-8">
            <Upload className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary-700 mb-2">
              Upload Foto
            </h3>
            <p className="text-primary-600 mb-4">
              Bagikan momen persiapan dan acara dengan warga RW IX
            </p>
            <Button variant="primary">
              Pilih Foto
            </Button>
          </div>
        </Card>
      )}

      {/* Photos Grid */}
      <div className={`grid gap-4 ${gridCols[columns as keyof typeof gridCols]}`}>
        {filteredPhotos.map((photo) => {
          const categoryInfo = categoryConfig[photo.category];
          
          return (
            <Card 
              key={photo.id}
              variant="interactive"
              padding="none"
              className="overflow-hidden group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.thumbnail || photo.url}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all">
                  <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between">
                      <Badge variant={categoryInfo.color as any} size="sm">
                        {categoryInfo.icon} {categoryInfo.label}
                      </Badge>
                      {photo.rt && (
                        <Badge variant="outline" size="sm" className="bg-white/90">
                          {photo.rt}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1 line-clamp-2">
                        {photo.caption}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span>{formatDate(photo.date)}</span>
                        <div className="flex items-center space-x-3">
                          {photo.likes && (
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {photo.likes}
                            </span>
                          )}
                          {photo.comments && (
                            <span className="flex items-center">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              {photo.comments}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Caption (always visible on mobile) */}
              <div className="p-3 sm:hidden">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={categoryInfo.color as any} size="sm">
                    {categoryInfo.icon} {categoryInfo.label}
                  </Badge>
                  {photo.rt && (
                    <Badge variant="outline" size="sm">
                      {photo.rt}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                  {photo.caption}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(photo.date)}</span>
                  <div className="flex items-center space-x-3">
                    {photo.likes && (
                      <span className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {photo.likes}
                      </span>
                    )}
                    {photo.comments && (
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {photo.comments}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <Modal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          size="xl"
        >
          <div className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant={categoryConfig[selectedPhoto.category].color as any}>
                    {categoryConfig[selectedPhoto.category].icon} {categoryConfig[selectedPhoto.category].label}
                  </Badge>
                  {selectedPhoto.rt && (
                    <Badge variant="outline">
                      {selectedPhoto.rt}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center space-x-1">
                  <Button size="sm" variant="ghost">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-gray-900 mb-2">
                  {selectedPhoto.caption}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(selectedPhoto.date)}
                  </span>
                  {selectedPhoto.author && (
                    <span>Oleh: {selectedPhoto.author}</span>
                  )}
                </div>
              </div>
              
              {selectedPhoto.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
```

---

**Document Version**: 1.0  
**Created**: June 19, 2025  
**Last Updated**: June 19, 2025  
**Component Library Lead**: Development Team
