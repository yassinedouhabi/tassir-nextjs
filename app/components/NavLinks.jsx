'use client';

import Link from 'next/link';

export default function NavLinks() {
  return (
    <>
      {/* Navigation links */}
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
    </>
  );
}
