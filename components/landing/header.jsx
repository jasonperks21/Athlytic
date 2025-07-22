'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-[100] w-full">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-[102]">
          <span className="font-inter text-[32px] font-bold text-white opacity-80 transition-opacity hover:opacity-100">Athlytic</span>
        </Link>

        {/* Navigation Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white opacity-90 hover:opacity-100">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-black/95 p-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/how-it-works"
                className="font-inter text-base font-thin uppercase tracking-wide text-white opacity-80 hover:opacity-100 hover:text-white transition-all"
              >
                How It Works
              </Link>
              <Link
                href="/login"
                className="font-inter text-base font-thin uppercase tracking-wide text-white opacity-80 hover:opacity-100 hover:text-white transition-all"
              >
                Log In
              </Link>
              <Button
                asChild
                className="font-inter text-base font-thin uppercase tracking-wide"
                variant="primary"
              >
                <Link href="/join">Join Today</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="font-inter text-base font-thin uppercase tracking-wide text-white opacity-80 hover:opacity-100 hover:text-black transition-all"
              >
                <Link href="/how-it-works">How It Works</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="font-inter text-base font-thin uppercase tracking-wide text-white opacity-80 hover:opacity-100 hover:text-black transition-all"
              >
                <Link href="/login">Log In</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                asChild
                className="font-inter text-base font-thin uppercase tracking-wide"
                variant="primary"
              >
                <Link href="/join">Join Today</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;