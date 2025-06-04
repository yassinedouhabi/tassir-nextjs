'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function ConfirmPasswordField({ control }) {
  return (
    <FormField
      name='confirmPassword'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl>
            <Input type='password' {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>Re-enter your password exactly.</p>
        </FormItem>
      )}
    />
  );
}
