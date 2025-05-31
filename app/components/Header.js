"use client";

import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";

export default function Header() {
  const navLinks = [
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (
    <header className="header">
      <div className="container ">
        <nav
          className="navbar flex flex-row items-center justify-between space-x-4 border-b border-neutral-200 dark:border-neutral-700 pb-5"
          id="navBar"
        >
          <div className="nav-logo relative">
            <Link href="/">
              <div className="absolute top-1/2 left-2.5 -translate-1/2 w-0 h-0 border-l-10 border-r-10 border-t-16 border-l-transparent border-r-transparent border-t-green-600 dark:border-t-green-400"></div>
              <h1 className="logo-link text-2xl font-bold text-green-600 dark:text-green-400 ml-7 ">
                Tassir
              </h1>
            </Link>
          </div>
          <div className="nav-links">
            <ul className="flex flex-row items-center gap-4 md:space-x-4">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="font-bold text-neutral-800 dark:text-neutral-200"
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
              <ModeToggle />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
