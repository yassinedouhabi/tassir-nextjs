'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { registerSchema } from '@/lib/registerSchema';
import { Form } from '@/components/ui/form';
import LoadingButton from '@/components/LoadingButton';
import { Loader2Icon, LogIn } from 'lucide-react';

import FirstNameField from '@/components/forms/fields/FirstNameField';
import LastNameField from '@/components/forms/fields/LastNameField';
import UsernameField from '@/components/forms/fields/UsernameField';
import AgeField from '@/components/forms/fields/AgeField';
import EmailField from '@/components/forms/fields/EmailField';
import PasswordField from '@/components/forms/fields/PasswordField';
import ConfirmPasswordField from '@/components/forms/fields/ConfirmPasswordField';
import PhoneNumberField from '@/components/forms/fields/PhoneNumberField';
import AcceptPrivacyCheckbox from '@/components/forms/fields/AcceptPrivacyCheckbox';
import EmailMarketingCheckbox from '@/components/forms/fields/EmailMarketingCheckbox';

export default function UserForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      acceptPrivacy: false,
      emailMarketing: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { confirmPassword, ...submitData } = data;

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Registration successful!');
        router.push('/login');
      } else {
        toast.error(result.error || 'Registration error');
        console.error('Registration error:', result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4 max-w-md mx-auto p-4'>
        <FirstNameField control={form.control} />
        <LastNameField control={form.control} />
        <UsernameField control={form.control} />
        <AgeField control={form.control} />
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <ConfirmPasswordField control={form.control} />
        <PhoneNumberField control={form.control} />
        <AcceptPrivacyCheckbox control={form.control} />
        <EmailMarketingCheckbox control={form.control} />

        <LoadingButton type='submit' isLoading={isLoading} loading='Registering...' notLoading='Submit' variant='default' size='lg' loadingIcon={Loader2Icon} notLoadingIcon={LogIn} className='w-full' />
      </form>
    </Form>
  );
}
