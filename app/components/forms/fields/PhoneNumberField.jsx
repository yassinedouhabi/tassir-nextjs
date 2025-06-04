'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function PhoneNumberField({ control }) {
  return (
    <FormField
      name='phoneNumber'
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Phone Number</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
          <p className='text-sm text-muted-foreground mt-1'>
            Enter your Moroccan phone number starting with <code>+212</code> or <code>0</code>, e.g. <code>+212612345678</code>.
          </p>
        </FormItem>
      )}
    />
  );
}
