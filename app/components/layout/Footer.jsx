'use client';

import ModeToggle from '@/components/ModeToggle';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t pt-8 pb-6 text-sm text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between flex-1">
          <p>
            &copy; {currentYear} Tassir. All rights
            reserved.
          </p>
          {/* Links */}
          <div className="flex gap-4">
            <a
              href="/about"
              className="hover:text-green-600 transition"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-green-600 transition"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-green-600 transition"
            >
              Privacy
            </a>
          </div>
        </div>
        <div className="self-end">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
