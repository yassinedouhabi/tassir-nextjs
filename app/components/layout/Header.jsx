'use client';

import Image from 'next/image';
import bgImage from '../../../public/images/faded.jpg';
import Logo from '../logo';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import NavLinks from '../NavLinks';
import CommandMenu from '../CommandMenu';

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-accent backdrop-blur-lg z-50">
      <div className="container flex items-center justify-between py-4 gap-4 flex-nowrap md:flex-nowrap">
        <Logo />

        {/* Search bar */}
        <div className="relative w-full lg:w-96 order-3 md:order-none">
          <Input
            type="text"
            placeholder="Search…"
            className="w-full sm:pr-24" // add right padding to avoid overlap
          />
          <div className="hidden absolute inset-y-0 right-0 sm:flex items-center pr-3 pointer-events-none">
            <CommandMenu />
          </div>
        </div>
        {/* Navigation links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLinks />
        </nav>

        {/* Actions: Notification + User */}
        {/* <div className="flex items-center gap-4"> */}
        {/* Notification */}
        {/* <Button
            size="icon"
            variant="ghost"
            className="text-white hover:text-accent-foreground"
          >
            <Bell className="w-5 h-5" />
          </Button> */}

        {/* User avatar */}
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="/images/user.jpg"
                  alt="@user"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}

        {/* Login and Sign up buttons */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden order-3">
          <button
            type="button"
            className="focus:outline-none"
          >
            <Drawer
              direction="right"
              className="w-[90vw] max-w-sm"
            >
              <DrawerTrigger>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-[90vw] max-w-sm flex flex-col justify-between">
                <DrawerHeader>
                  <DrawerClose className="self-end">
                    <Button variant="outline">
                      <X />
                    </Button>
                  </DrawerClose>
                  <DrawerTitle>
                    Welcome to Tassir
                  </DrawerTitle>
                  <DrawerDescription>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Accusantium
                  </DrawerDescription>

                  <div className="hidden flex-col gap-4 mt-4 w-full overflow-hidden">
                    <div className="flex items-center gap-4 w-full max-w-full overflow-hidden">
                      <Avatar>
                        <AvatarImage
                          src="/images/user.jpg"
                          alt="@user"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-sm truncate max-w-[384px]">
                        <p className="truncate">
                          Yassine Douhabi
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          douhabiyassine@gmail.com
                        </p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      Logout
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mt-2 w-full">
                    <Button variant="outline" size="sm">
                      Login
                    </Button>
                    <Button size="sm">Sign Up</Button>
                  </div>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col gap-4 px-4 py-2">
                    <Link
                      href="/restaurants"
                      className="text-sm"
                    >
                      Browse Restaurants
                    </Link>
                    <Link
                      href="/orders"
                      className="text-sm"
                    >
                      My Orders
                    </Link>
                    <Link
                      href="/favorites"
                      className="text-sm"
                    >
                      Favorites
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm"
                    >
                      Help & Contact
                    </Link>
                  </nav>
                </div>

                <DrawerFooter>
                  {/* Cart Summary */}
                  <div>
                    Login or sign up to see your Cart
                    Summary
                  </div>
                  <div className="hidden border-t pt-4 px-4">
                    <p className="font-semibold text-sm mb-1">
                      Cart
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>2 items</span>
                      <span>$24.99</span>
                    </div>
                    <Button
                      size="sm"
                      className="mt-2 w-full"
                    >
                      View Cart
                    </Button>
                  </div>

                  {/* Delivery Address */}
                  {/* <div className="border-t pt-4 px-4">
                    <p className="font-semibold text-sm mb-1">
                      Deliver to
                    </p>
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-left"
                    >
                      123 Main St, New York, NY
                    </Button>
                  </div> */}

                  {/* Theme Toggle Placeholder */}
                  {/* <div className="border-t pt-4 px-4">
                    <p className="font-semibold text-sm mb-1">
                      Appearance
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Dark Mode
                      </span>
                      <input type="checkbox" />
                    </div>
                  </div> */}

                  {/* Promotions/Referral Section */}
                  {/* <div className="border-t pt-4 px-4 pb-4">
                    <p className="font-semibold text-sm mb-1">
                      Promotions
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Get $5 off when you refer a friend.
                    </p>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="mt-2 w-full"
                    >
                      Refer a Friend
                    </Button>
                  </div> */}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </button>
        </div>
      </div>
    </header>
  );
}
