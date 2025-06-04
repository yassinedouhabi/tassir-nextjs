'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function PasswordField({ control }) {
  return (
    <FormField
      name='password'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type='password' {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>Minimum 8 characters, including uppercase, lowercase, number &amp; special character.</p>
        </FormItem>
      )}
    />
  );
}
