'use client';

import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  const { data: session, status } = useSession();
  const firstRender = useRef(true);

  useEffect(() => {
    if (status === 'authenticated' && session && firstRender.current) {
      toast.success(
        `Welcome back, ${session.user?.name || session.user?.email}!`
      );
      firstRender.current = false;
    }
  }, [session, status]);

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
              <DropdownMenuItem disabled>
                {session.user?.name
                  ? `${session.user.name} (${session.user.email})`
                  : session.user.email}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className='bg-red-200 text-red-500 hover:bg-red-500 hover:text-red-200 '>
                Logout
              </DropdownMenuItem>
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
