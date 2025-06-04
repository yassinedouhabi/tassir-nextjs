'use client';

import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';
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
import Avvvatars from 'avvvatars-react';

export default function Profile() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut({
      callbackUrl: `/goodbye`,
    });
    toast.success('Logged out successfully');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={
            'm-0 p-0 rounded-full border-0 outline-0 ring-0'
          }
        >
          <Avvvatars
            aria-label="User menu"
            size={40}
            shadow={true}
            radius={50}
            border={true}
            value={
              session.user.username ||
              session.user.name ||
              session.user.email
            }
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {session.user?.username}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
