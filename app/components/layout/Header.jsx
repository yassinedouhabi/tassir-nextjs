'use client';

import Logo from '../logo';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-accent backdrop-blur-lg z-50">
      <div className="container flex items-center justify-between py-4 gap-4 flex-nowrap">
        <Logo />
        <div className="flex flex-row items-center gap-4 flex-nowrap">
          <Button variant="outline">Login</Button>
          <Button variant="default">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
