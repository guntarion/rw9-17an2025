import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronUp,
  Calendar,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
  MessageCircle,
  Youtube,
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const quickLinks: FooterSection = {
  title: 'Tautan Cepat',
  links: [
    { label: 'Beranda', href: '/' },
    { label: 'Lomba & Kompetisi', href: '/lomba' },
    { label: 'Galeri Kegiatan', href: '/galeri' },
    { label: 'Tentang Acara', href: '/tentang' },
  ],
};

const competitions: FooterSection = {
  title: 'Lomba',
  links: [
    { label: 'Hias Kampung/RT', href: '/lomba/hias-kampung' },
    { label: 'Bulu Tangkis Keluarga', href: '/lomba/bulu-tangkis-keluarga' },
    { label: 'Jalan Sehat', href: '/lomba/jalan-sehat' },
    { label: 'Bazar Kreatif', href: '/lomba/bazar' },
  ],
};

const information: FooterSection = {
  title: 'Informasi',
  links: [
    { label: 'Panitia Pelaksana', href: '/panitia' },
    { label: 'Hiburan & Pentas', href: '/hiburan' },
    { label: 'Tanya Jawab', href: '/faq' },
    { label: 'Hubungi Kami', href: '/kontak' },
  ],
};

const contactInfo = {
  address: 'RW IX Desa Wedoro, Waru, Sidoarjo, Jawa Timur',
  phone: '+62 xxx xxxx xxxx',
  email: 'panitia.rwix@gmail.com',
  eventDate: '30-31 Agustus 2025',
};

const socialMedia = [
  { icon: Facebook, href: '#', label: 'Facebook RW IX' },
  { icon: Instagram, href: '#', label: 'Instagram RW IX' },
  { icon: Youtube, href: '#', label: 'YouTube RW IX' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp Panitia' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Event Highlight Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <h3 className="text-3xl font-bold">HUT RI Ke-80 RW IX</h3>
              <Leaf className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              <strong>Tema: Lingkungan Hidup dan Penghijauan</strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4 text-green-500" />
                <span>30-31 Agustus 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>RW IX Desa Wedoro</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <Users className="w-4 h-4 text-green-500" />
                <span>Panitia RT 11</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-green p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RW IX Sidoarjo</h3>
                <p className="text-sm text-gray-400">Desa Wedoro, Waru</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Peringatan HUT RI Ke-80 RW IX Sidoarjo dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong>. 
              Acara ini diselenggarakan untuk mempererat persatuan dan kesatuan warga serta 
              meningkatkan kesadaran akan pentingnya menjaga lingkungan hidup.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Tanggal Acara: {contactInfo.eventDate}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{quickLinks.title}</h3>
            <ul className="space-y-3">
              {quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Trophy className="w-4 h-4 mr-2" />
              {competitions.title}
            </h3>
            <ul className="space-y-3">
              {competitions.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{information.title}</h3>
            <ul className="space-y-3">
              {information.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-300 text-sm">Ikuti kami:</span>
              {socialMedia.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            
            {/* Scroll to Top */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <ChevronUp className="w-4 h-4 mr-2" />
              Kembali ke Atas
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} HUT RI Ke-80 RW IX Sidoarjo.</span>
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>untuk kemerdekaan Indonesia</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/panitia" className="hover:text-white transition-colors">
                Panitia Pelaksana
              </Link>
              <Link href="/kontak" className="hover:text-white transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
