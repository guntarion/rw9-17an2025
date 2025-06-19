'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { CountdownTimerProps, TimeLeft } from '@/types';

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
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="countdown-card">
              <div className="h-12 bg-primary-200 rounded mb-2"></div>
              <div className="h-4 bg-primary-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
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
        <div className="inline-flex items-center px-6 py-3 bg-gradient-green text-white rounded-full text-lg font-semibold shadow-green animate-pulse-green">
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
    default: 'text-2xl md:text-3xl font-bold text-primary-600',
    compact: 'text-lg font-semibold text-primary-600',
    hero: 'text-4xl md:text-6xl font-bold text-primary-600',
  };

  const labelStyle = {
    default: 'text-sm text-gray-600 mt-1',
    compact: 'text-xs text-gray-500',
    hero: 'text-base md:text-lg text-gray-600 mt-2',
  };

  if (variant === 'compact') {
    return (
      <div className={cn('inline-flex items-center space-x-1 text-primary-600 font-semibold', className)}>
        {timeUnits.map((unit, index) => (
          <span key={unit.label} className="flex items-center">
            <span className="font-bold text-lg">{unit.value.toString().padStart(2, '0')}</span>
            <span className="text-xs ml-0.5 text-gray-500">{unit.short}</span>
            {index < timeUnits.length - 1 && <span className="mx-1 text-gray-400">:</span>}
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
            'countdown-card group',
            variant === 'hero' && 'p-6 md:p-8'
          )}>
            <div className={cn(numberStyle[variant], 'animate-bounce-gentle')}>
              {unit.value.toString().padStart(2, '0')}
            </div>
            {showLabels && (
              <div className={cn(labelStyle[variant], 'font-medium')}>
                {unit.label}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Pre-configured countdown components for common use cases
export function CountdownHero({ targetDate, className }: { targetDate: Date; className?: string }) {
  return (
    <CountdownTimer 
      targetDate={targetDate}
      variant="hero"
      className={className}
      showLabels={true}
    />
  );
}

export function CountdownCompact({ targetDate, className }: { targetDate: Date; className?: string }) {
  return (
    <CountdownTimer 
      targetDate={targetDate}
      variant="compact"
      className={className}
      showLabels={false}
    />
  );
}

export function CountdownCard({ targetDate, className }: { targetDate: Date; className?: string }) {
  return (
    <div className={cn('card p-6', className)}>
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-900">
        Countdown Menuju Hari H
      </h3>
      <CountdownTimer 
        targetDate={targetDate}
        variant="default"
        showLabels={true}
      />
      <p className="text-center text-sm text-gray-600 mt-4">
        30 Agustus 2025 • 08:00 WIB
      </p>
    </div>
  );
}