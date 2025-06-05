import { useSession } from 'next-auth/react';

export default function useUserSession() {
  const { data: session, status } = useSession();
  return {
    user: session?.user || null,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  };
}
