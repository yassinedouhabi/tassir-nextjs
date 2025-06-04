'use client';

import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

export default function EmailMarketingCheckbox({ control }) {
  return (
    <FormField
      name='emailMarketing'
      control={control}
      render={({ field }) => (
        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className='space-y-1 leading-none'>
            <FormLabel>Subscribe to marketing emails (optional).</FormLabel>
            <FormMessage />
            <p className='text-sm text-muted-foreground mt-1'>Opt-in to receive updates and promotions.</p>
          </div>
        </FormItem>
      )}
    />
  );
}
