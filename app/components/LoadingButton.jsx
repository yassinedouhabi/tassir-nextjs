'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';

export default function LoadingButton({ type = 'button', route = null, loading = 'Loading...', notLoading = 'Submit', loadingIcon: LoadingIcon = null, notLoadingIcon: NotLoadingIcon = null, variant = 'default', size = 'md', onClick = null, className = '', isLoading = false }) {
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      if (onClick) {
        onClick(e);
      }
      if (route) {
        router.push(route);
      }
    },
    [onClick, route, router]
  );
  const combinedClassName = `flex items-center justify-center ${className}`;

  return (
    <Button type={type} onClick={handleClick} disabled={isLoading} size={size} variant={variant} className={combinedClassName} aria-busy={isLoading} aria-disabled={isLoading}>
      {isLoading ? (
        <>
          {LoadingIcon && <LoadingIcon className='animate-spin mr-2' size={16} />}
          {loading}
        </>
      ) : (
        <div className='flex items-center gap-2'>
          {NotLoadingIcon && <NotLoadingIcon size={16} />}
          {notLoading}
        </div>
      )}
    </Button>
  );
}

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
