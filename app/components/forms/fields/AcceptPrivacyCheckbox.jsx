'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

export default function AcceptPrivacyCheckbox({ control }) {
  return (
    <FormField
      name='acceptPrivacy'
      control={control}
      render={({ field }) => (
        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className='space-y-1 leading-none'>
            <FormLabel>I accept the privacy policy and terms.</FormLabel>
            <FormMessage />
            <p className='text-sm text-muted-foreground mt-1'>You must accept to continue.</p>
          </div>
        </FormItem>
      )}
    />
  );
}
