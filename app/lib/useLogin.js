import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function login(email, password) {
    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (result?.ok) {
      router.push('/');
      return { success: true };
    } else {
      toast.error(<strong>{result.error}</strong>);
      return { success: false, error: result.error };
    }
  }

  return {
    login,
    isLoading,
  };
}
