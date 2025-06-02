'use client';

import Link from 'next/link';
import ModeToggle from '@/components/ModeToggle';
import Logo from '@/components/Logo';

import Profile from './Profile';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';

export default function Header() {
  const { data: session, status } = useSession();
  const firstRender = useRef(true);

  useEffect(() => {
    if (status === 'authenticated' && session && firstRender.current) {
      firstRender.current = false;
    }
  }, [session, status]);

  return (
    <header className='header bg-card text-card-foreground '>
      <div className='container border-b border-neutral-200 dark:border-neutral-700'>
        <nav className='navbar flex flex-row items-center justify-between space-x-4' id='navBar'>
          <div className='nav-logo relative'>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <div className='nav-links'>
            <div className='flex flex-row items-center gap-2'>
              {session?.user && (
                <div className='text-xs mr-4 flex flex-row flex-wrap items-center gap-1'>
                  <h3 className='welcome-user'>Welcome</h3>
                  <p className='user-name font-bold text-green-500'>{session.user.name}</p>
                </div>
              )}
              <Profile />
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
