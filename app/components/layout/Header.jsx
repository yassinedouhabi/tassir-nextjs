'use client';

import Image from 'next/image';
import bgImage from '../../../public/images/faded.jpg';
import Logo from '../Logo';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-accent backdrop-blur-lg z-50">
      <div className="container flex items-center justify-between py-4 gap-4 flex-wrap md:flex-nowrap">
        <Logo />

        {/* Search bar */}
        <div className="flex-1 w-full md:w-auto order-3 md:order-none">
          <Input
            type="text"
            placeholder="Search…"
            className="w-full md:w-96"
          />
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-accent-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-accent-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-accent-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-accent-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions: Notification + User */}
        {/* <div className="flex items-center gap-4"> */}
        {/* Notification */}
        {/* <Button
            size="icon"
            variant="ghost"
            className="text-white hover:text-accent-foreground"
          >
            <Bell className="w-5 h-5" />
          </Button> */}

        {/* User avatar */}
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="/images/user.jpg"
                  alt="@user"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}

        {/* Login and Sign up buttons */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden order-3">
          <button
            type="button"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
