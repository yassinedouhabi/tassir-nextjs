'use client';

import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { data: session, status } = useSession();
  const firstRender = useRef(true);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session && !sessionStorage.getItem('welcomeToastShown')) {
      toast.success(`Welcome back, ${session.user?.username || session.user?.email}!`);
      sessionStorage.setItem('welcomeToastShown', 'true');

      if (window.location.pathname === '/login' || window.location.pathname === '/register') {
        router.replace('/');
      }
    }
  }, [session, status, router]);

  const handleLogout = () => {
    signOut();
    toast.success('Logged out successfully');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' aria-label='User menu'>
          <User />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56' align='start'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {session ? (
            <>
              <DropdownMenuItem className='font-bold' disabled>
                {session.user?.username}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem asChild>
                <Link href='/login'>Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/register'>Register</Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
