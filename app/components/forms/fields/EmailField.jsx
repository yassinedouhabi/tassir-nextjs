'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function EmailField({ control }) {
  return (
    <FormField
      name='email'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type='email' {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>Enter a valid email address.</p>
        </FormItem>
      )}
    />
  );
}
