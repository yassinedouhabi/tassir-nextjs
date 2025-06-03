'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LoadingButton({
  route,
  loading,
  notLoading,
  loadingIcon: LoadingIcon,
  notLoadingIcon: NotLoadingIcon,
  variant,
  size,
  onClick,
  className,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    setIsLoading(true);

    if (route) {
      router.push(route);
    } else {
      console.warn('No route provided to LoadingButton');
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      size={size}
      variant={variant}
      className={`flex flex-row items-center gap-x-2 ${className}`}>
      {isLoading ? (
        <>
          {LoadingIcon && <LoadingIcon className='animate-spin' size={16} />}
          {loading}
        </>
      ) : (
        <div className='flex flex-row items-center gap-x-2'>
          {NotLoadingIcon && <NotLoadingIcon size={16} />}
          {notLoading}
        </div>
      )}
    </Button>
  );
}
