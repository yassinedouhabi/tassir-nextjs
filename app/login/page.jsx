'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { loginSchema } from '@/lib/loginSchema';

import EmailField from '@/components/forms/fields/EmailField';
import PasswordField from '@/components/forms/fields/PasswordField';
import AcceptPrivacyCheckbox from '@/components/forms/fields/AcceptPrivacyCheckbox';

import { Loader2Icon, LogIn } from 'lucide-react';
import LoadingButton from '@/components/LoadingButton';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

const formSchema = loginSchema;

export default function LoginForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      acceptPrivacy: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.ok) {
      router.push('/');
    } else {
      toast.error(<strong>{result.error}</strong>);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form className='grid gap-4 max-w-md mx-auto p-4'>
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <AcceptPrivacyCheckbox control={form.control} />

        <LoadingButton
          type='button'
          loading='Logging in...'
          notLoading='Login'
          loadingIcon={Loader2Icon}
          notLoadingIcon={LogIn}
          variant='default'
          size='lg'
          className='w-full'
          onClick={() => form.handleSubmit(onSubmit)()}
          isLoading={isLoading} // Pass loading state externally
        />
      </form>
    </Form>
  );
}
