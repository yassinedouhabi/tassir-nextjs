'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';

export default function LoadingButton({
  type = 'button',
  route,
  loading,
  notLoading,
  loadingIcon: LoadingIcon,
  notLoadingIcon: NotLoadingIcon,
  variant,
  size,
  onClick,
  className,
  isLoading: externalIsLoading, // NEW
}) {
  const router = useRouter();

  const isLoading = externalIsLoading ?? false;

  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    if (route) {
      router.push(route);
    }
  }

  return (
    <Button type={type} onClick={handleClick} disabled={isLoading} size={size} variant={variant} className={className}>
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

// Define prop types for validation & clarity
LoadingButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  route: PropTypes.string,
  loading: PropTypes.node,
  notLoading: PropTypes.node,
  loadingIcon: PropTypes.elementType,
  notLoadingIcon: PropTypes.elementType,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
