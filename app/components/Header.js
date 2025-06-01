'use client';

import Link from 'next/link';
import ModeToggle from '@/components/ModeToggle';
import Logo from '@/components/Logo';

import Profile from './Profile';

export default function Header() {
  return (
    <header className='header bg-emerald-50 dark:bg-emerald-950'>
      <div className='container border-b border-neutral-200 dark:border-neutral-700'>
        <nav
          className='navbar flex flex-row items-center justify-between space-x-4'
          id='navBar'>
          <div className='nav-logo relative'>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <div className='nav-links'>
            <div className='flex flex-row items-center gap-2'>
              <Profile />
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
