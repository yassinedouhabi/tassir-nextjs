'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CircleChevronLeft, Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoadingButton({ route, loading, notLoading }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    router.push(route);
  }
  return (
    <Button onClick={handleClick} disabled={isLoading} size='sm' className='back-home-link flex flex-row items-center gap-x-2 bg-accent-foreground text-sm font-bold px-4 py-2 rounded w-fit mb-4 md:mb-8'>
      {isLoading ? (
        <>
          <Loader2Icon className='animate-spin' />
          {loading}
        </>
      ) : (
        <div className='flex flex-row items-center gap-x-2'>
          <CircleChevronLeft size={16} />
          {notLoading}
        </div>
      )}
    </Button>
  );
}
