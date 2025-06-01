import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuGroup>
          <DropdownMenuItem>Login</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>Sign Up</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
