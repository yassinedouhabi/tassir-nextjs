'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

import Profile from '../Profile';
import { Button } from '@/components/ui/button';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';

export default function Header() {
  const { data: session, status } = useSession();
  const firstRender = useRef(true);

  useEffect(() => {
    if (
      status === 'authenticated' &&
      session &&
      firstRender.current
    ) {
      firstRender.current = false;
    }
  }, [session, status]);

  return (
    <header className="header bg-card text-card-foreground ">
      <div className="container border-b border-neutral-200 dark:border-neutral-700">
        <nav
          className="navbar flex flex-row items-center justify-between space-x-4"
          id="navBar"
        >
          <div className="nav-logo relative">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="nav-links">
            <div className="flex flex-row items-center gap-2">
              <Button>Login</Button>
              <Button variant="outline">Sign Up</Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
