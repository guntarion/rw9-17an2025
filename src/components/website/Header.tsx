'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import {
  Menu,
  X,
  Home,
  Trophy,
  Camera,
  Users,
  Info,
  Music,
  HelpCircle,
  Phone,
  Leaf,
  Calendar
} from 'lucide-react';

const navigation = [
  {
    name: 'Beranda',
    href: '/',
    icon: Home,
  },
  {
    name: 'Lomba',
    href: '/lomba',
    icon: Trophy,
    badge: '4 Lomba',
  },
  {
    name: 'Galeri',
    href: '/galeri',
    icon: Camera,
  },
  {
    name: 'Panitia',
    href: '/panitia',
    icon: Users,
  },
  {
    name: 'Tentang',
    href: '/tentang',
    icon: Info,
  },
  {
    name: 'Hiburan',
    href: '/hiburan',
    icon: Music,
  },
  {
    name: 'FAQ',
    href: '/faq',
    icon: HelpCircle,
  },
  {
    name: 'Kontak',
    href: '/kontak',
    icon: Phone,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-green rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">HUT RI Ke-80</div>
              <div className="text-sm text-gray-600">RW IX Sidoarjo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  {active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Event Info Badge */}
          <div className="hidden md:flex items-center space-x-3">
            <Badge variant="outline" className="text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              30-31 Agt 2025
            </Badge>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-green rounded-lg">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">HUT RI Ke-80</div>
                    <div className="text-sm text-gray-600">RW IX Sidoarjo</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="space-y-2">
                {navigation.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Event Info */}
              <div className="mt-8 p-4 bg-gradient-nature rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    HUT RI Ke-80 RW IX
                  </div>
                  <div className="text-xs text-gray-600 mb-3">
                    Tema: Lingkungan Hidup & Penghijauan
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    30-31 Agustus 2025
                  </Badge>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 text-center">
                <Link href="/panitia">
                  <Button size="sm" className="bg-gradient-green hover:shadow-green">
                    <Phone className="w-4 h-4 mr-2" />
                    Hubungi Panitia
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}