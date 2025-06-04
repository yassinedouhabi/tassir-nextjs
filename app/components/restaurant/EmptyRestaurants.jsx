'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CircleChevronLeft, Loader2Icon, RefreshCcw } from 'lucide-react';
import TryAgainButton from '@/components/TryAgainButton';
import LoadingButton from '@/components/LoadingButton';

export default function EmptyRestaurants() {
  return (
    <motion.div
      className='flex flex-col items-center justify-center text-center mt-20 gap-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}>
      {/* SVG illustration (place under /public/illustrations/empty-plate.svg) */}
      <Image
        src='/illustrations/empty-plate.jpg'
        alt='Empty plate illustration'
        width={220}
        height={220}
        className='dark:invert'
        priority
      />

      {/* Icon fallback while image is loading */}
      {/* <Frown className='w-12 h-12 text-gray-400' /> */}

      <h2 className='text-2xl font-semibold text-neutral-700 dark:text-neutral-300'>
        No Restaurants Available
      </h2>
      <p className='max-w-md text-neutral-500 dark:text-neutral-400'>
        We couldn’t find any restaurants in this area yet. You can try again
        later, or become the pioneer by adding the very first restaurant!
      </p>

      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <LoadingButton
          onClick={() => location.reload()}
          loading='Reloading...'
          notLoading='Try Again'
          loadingIcon={Loader2Icon}
          notLoadingIcon={RefreshCcw}
          variant='default'
          size='lg'
        />

        <LoadingButton
          route='/'
          loading='Please wait'
          notLoading='Be the First to Add a Restaurant'
          loadingIcon={Loader2Icon}
          notLoadingIcon={CircleChevronLeft}
          variant='outline'
          size='lg'
        />
      </div>
    </motion.div>
  );
}
