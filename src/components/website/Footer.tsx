// src/components/website/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer component for the website
 * Contains links, copyright information and social media links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">NextJS Template</span>
            </Link>
            <p className="text-gray-600 mb-4 text-sm">
              A modern, full-stack Next.js template with authentication, AI integration, and dashboard functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-primary text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-600 hover:text-primary text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-gray-600 hover:text-primary text-sm">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://nextjs.org/docs" className="text-gray-600 hover:text-primary text-sm">
                  Next.js Docs
                </Link>
              </li>
              <li>
                <Link href="https://tailwindcss.com/docs" className="text-gray-600 hover:text-primary text-sm">
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">hello@yourtemplate.com</li>
              <li className="text-gray-600 text-sm">+1 (555) 123-4567</li>
              <li className="text-gray-600 text-sm">
                123 Template Street, Suite 100, City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} NextJS Template. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with <span className="text-red-500">♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
