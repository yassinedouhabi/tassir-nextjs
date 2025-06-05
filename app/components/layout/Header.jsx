'use client';

import Logo from '../logo';

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-accent backdrop-blur-lg z-50">
      <div className="container flex items-center justify-between py-4 gap-4 flex-nowrap md:flex-nowrap">
        <Logo />
      </div>
    </header>
  );
}
