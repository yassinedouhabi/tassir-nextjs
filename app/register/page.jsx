'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

export default function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setTimeout(() => {
        router.push('/login');
        toast.success('Your registder successfully!', 3000);
      }, 2000);
      setLoading(true);
    } else {
      const data = await res.json();
      toast.error(data.message || 'Something went wrong');
    }
  };

  return (
    <div className='max-w-lg mx-auto flex items-center justify-center mt-8'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl'>Create an Account</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className='grid gap-6'>
            {/* Name */}
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' type='text' placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Email */}
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='you@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Password */}
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' placeholder='••••••••' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {/* Confirm Password */}
            <div className='grid gap-2'>
              <Label htmlFor='confirm-password'>Confirm Password</Label>
              <Input id='confirm-password' type='password' placeholder='••••••••' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            {/* Error */}
            {error && <p className='text-sm text-red-500 text-center'>{error}</p>}

            {/* Submit */}
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? (
                <>
                  <Loader2Icon className='animate-spin' />
                  Please wait
                </>
              ) : (
                'Register'
              )}
            </Button>

            {/* Link to login */}
            <div className='text-center text-sm'>
              Already have an account?{' '}
              <a href='/login' className='text-blue-600 hover:underline'>
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
