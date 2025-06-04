'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function UsernameField({ control }) {
  return (
    <FormField
      name='username'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>Choose a username 3-20 characters long.</p>
        </FormItem>
      )}
    />
  );
}
