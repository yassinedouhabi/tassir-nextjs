'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SmilePlus, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function GoodbyePage() {
  const router = useRouter();

  useEffect(() => {
    // Custom countdown component for the toast
    function CountdownToast() {
      const [seconds, setSeconds] = useState(5);

      useEffect(() => {
        if (seconds === 0) return;
        const interval = setInterval(() => {
          setSeconds((s) => s - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, [seconds]);

      return (
        <div>
          Redirecting you to the home page in{' '}
          <strong>{seconds}</strong> second
          {seconds !== 1 ? 's' : ''}...
        </div>
      );
    }

    toast(<CountdownToast />, { duration: 5000 });

    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-100 via-green-200 to-lime-100 dark:from-green-900 dark:via-emerald-800 dark:to-lime-900 p-4">
      <Card className="w-full max-w-lg text-center bg-white/40 backdrop-blur-md border border-white/30 shadow-xl dark:bg-black/30 dark:border-white/10 rounded-3xl">
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-center">
            <SmilePlus className="w-14 h-14 text-green-600 dark:text-lime-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            Goodbye! 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Redirecting you to the homepage shortly...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            If you’re not redirected,{' '}
            <Link
              href="/"
              className="underline text-green-700 dark:text-lime-400"
            >
              click here
            </Link>
            .
          </p>
          <Link href="/" passHref>
            <Button size="lg" className="w-full gap-2 mt-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
