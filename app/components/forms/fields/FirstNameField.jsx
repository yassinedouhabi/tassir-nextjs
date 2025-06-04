'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function FirstNameField({ control }) {
  return (
    <FormField
      name='firstName'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>Please enter your given name.</p>
        </FormItem>
      )}
    />
  );
}
