import React from 'react';

export default function Logo({ className }) {
  return (
    <div className={`logo relative flex items-center gap-2 ${className}`}>
      <div className='w-0 h-0 border-l-10 border-r-10 border-t-16 border-l-transparent border-r-transparent border-t-green-600 dark:border-t-green-400'></div>
      <h1 className='logo-link text-2xl font-bold text-green-600 dark:text-green-400'>
        Tassir
      </h1>
    </div>
  );
}
