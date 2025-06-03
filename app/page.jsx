'use client';

import Image from 'next/image';
import { Utensils, Loader2Icon } from 'lucide-react';
import HeroImage from '../public/images/hero-image.jpg';
import LoadingButton from './components/LoadingButton';

export default function Page() {
  return (
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
        <LoadingButton
          route='/restaurants'
          loading='Please wait'
          notLoading='Order Now'
          loadingIcon={Loader2Icon}
          notLoadingIcon={Utensils}
          variant='default'
          size='lg'
          className='md:w-1/2'
        />
      </div>
    </div>
  );
}
