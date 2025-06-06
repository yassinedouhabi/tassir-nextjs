'use client';

import Image from 'next/image';
import SearchBar from '../../SearchBar';

export default function HeroSection() {
  return (
    <div className="hero-section relative h-full">
      <div className="absolute inset-0 -z-50 mask-alpha mask-l-from-50% mask-l-to-transparent">
        <Image
          src="/images/login-image.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover grayscale"
          fill
          priority
        />
      </div>

      <div className="hero-content relative -z-10 flex flex-col items-center md:items-start justify-center dark:text-accent-foreground text-center md:text-start px-4 py-20 text-shadow-xs">
        <div className="absolute inset-0 bg-gradient-to-r from-white/70  dark:from-black/70 dark:via-black/50 via-white/50 to-transparent z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center gap-8">
          <div className="hero-text flex flex-col items-center justify-center text-center gap-2 w-full md:w-1/2">
            <h1 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-balance">
              Crave It. Order It. Love It.
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl leading-8 text-balance">
              From local gems to national favorites — get
              your favorite meals delivered fast and fresh,
              right to your door. No lines, no waiting. Just
              delicious food, anytime you want it.
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
