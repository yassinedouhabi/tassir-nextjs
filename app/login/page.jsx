'use client';

// React + Form libs
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Schema
import { loginSchema } from '@/lib/loginSchema';

// UI components
import { Form } from '@/components/ui/form';
import EmailField from '@/components/forms/fields/EmailField';
import PasswordField from '@/components/forms/fields/PasswordField';
import AcceptPrivacyCheckbox from '@/components/forms/fields/AcceptPrivacyCheckbox';
import LoadingButton from '@/components/LoadingButton';

// Icons
import { Loader2Icon, LogIn } from 'lucide-react';

// Custom hooks
import { useLogin } from '@/lib/useLogin';

const formSchema = loginSchema;

export default function LoginForm() {
  const { login, isLoading } = useLogin();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      acceptPrivacy: false,
    },
  });

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <Form {...form}>
      <form className="grid gap-4 max-w-md mx-auto p-4">
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <AcceptPrivacyCheckbox control={form.control} />

        <LoadingButton
          type="button"
          loading="Logging in..."
          notLoading="Login"
          loadingIcon={Loader2Icon}
          notLoadingIcon={LogIn}
          variant="default"
          size="lg"
          className="w-full"
          onClick={() => form.handleSubmit(onSubmit)()}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
}
