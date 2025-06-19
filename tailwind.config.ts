import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // Green Environmental Theme for HUT RI Ke-80 RW IX
      colors: {
        // Primary Green Palette (Main brand color)
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
          DEFAULT: '#22c55e',
          foreground: '#ffffff'
        },
        // Secondary Earth Palette (Natural brown tones)
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
          DEFAULT: '#ca9a7c',
          foreground: '#ffffff'
        },
        // Accent Fresh Green (Bright environmental accent)
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
          DEFAULT: '#84cc16',
          foreground: '#ffffff'
        },
        // Semantic Colors
        success: '#10b981',  // Green for success states
        warning: '#f59e0b',  // Amber for warnings
        error: '#ef4444',    // Red for errors
        info: '#3b82f6',     // Blue for info
        
        // System Colors (keeping existing structure)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
      },
      
      // Typography for Indonesian content
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      // Environmental theme spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom shadows for environmental feel
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(34, 197, 94, 0.07), 0 10px 20px -2px rgba(34, 197, 94, 0.04)',
        'green': '0 4px 14px 0 rgba(34, 197, 94, 0.15)',
        'earth': '0 4px 14px 0 rgba(202, 154, 124, 0.15)',
        md: '0px 1px 4px 0px rgba(133, 146, 173, 0.2)',
        lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
        sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
      },
      
      // Border radius for modern feel
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      
      // Container for consistent layout
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      
      // Custom animations for environmental theme
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)' }
        }
      },
      
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-green': 'pulse-green 2s infinite'
      },
      
      // Custom gradients for environmental theme
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #22c55e 0%, #84cc16 100%)',
        'gradient-earth': 'linear-gradient(135deg, #ca9a7c 0%, #22c55e 100%)',
        'gradient-nature': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;