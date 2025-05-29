'use client';

import Link from 'next/link';
import 

export default function Header() {
  const navLinks = [
    {
      name: 'Cart',
      path: '/cart',
      icon: 
    },
  ];

  return (
    <header className='header'>
      <div className='container '>
        <nav className='navbar flex flex-row items-center justify-between space-x-4 border-b border-gray-200 pb-5' id='navBar'>
          <div className='nav-logo relative'>
            <Link href='/'>
              <div className='absolute top-1/2 -translate-1/2 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent border-b-green-600'></div>
              <h1 className='logo-link text-2xl font-bold text-green-600 dark:text-white ml-4 '>Tassir</h1>
            </Link>
          </div>
          <div className='nav-links'>
            <ul className='flex flex-row gap-4 md:space-x-4'>
              {navLinks.map((link) => (
                <li key={link.path} className='font-bold text-neutral-700 hover:text-black'>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
