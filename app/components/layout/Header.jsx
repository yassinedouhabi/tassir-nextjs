'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

import Profile from '../Profile';
import { Button } from '@/components/ui/button';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Avvvatars from 'avvvatars-react';
import NotificationCenter from '@/components/NotificationCenter/NotificationCenter';

export default function Header() {
  const router = useRouter();
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
              {status === 'loading' ? null : status !==
                'authenticated' ? (
                <>
                  <Button
                    size="sm"
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => router.push('/register')}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <div className="notifications">
                    <NotificationCenter />
                  </div>
                  <Profile />
                  {/* <Avvvatars
                    size={40}
                    shadow={true}
                    radius={50}
                    border={true}
                    value={
                      session.user.username ||
                      session.user.name ||
                      session.user.email
                    }
                  /> */}
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
