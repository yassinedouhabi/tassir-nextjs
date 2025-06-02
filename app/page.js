import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroImage from '../public/images/hero-image.jpg';

export default function Page() {
  return (
    <main>
      <div className='container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-full aspect-auto relative rounded-xl overflow-hidden'>
            <Image
              src={HeroImage}
              alt='hero image'
              className='object-cover dark:brightness-[0.2] dark:grayscale'
              priority
            />
          </div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200'>
            Welcome to{' '}
            <span className='text-green-600 dark:text-green-400'>Tassir</span>
          </h1>
          <p className='text-base sm:text-lg text-neutral-700 dark:text-neutral-300'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            beatae.
          </p>
          <Link href='/restaurants'>
            <Button className='w-full sm:w-auto bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800'>
              Make Your Order Now!
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
