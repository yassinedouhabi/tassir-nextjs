import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required').max(10, 'First name must contain at most 10 character(s)'),
    lastName: z.string().min(1, 'Last name is required').max(10, 'Last name must contain at most 10 character(s)'),
    username: z.string().min(3, 'Username must be at least 3 characters').max(20, 'Username must be at most 20 characters'),
    age: z.coerce.number().int('Age must be an integer').min(18, 'You must be at least 18'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    phoneNumber: z.string().regex(/^(?:\+212|0)([5-7][0-9]{8})$/, 'Invalid phone number'),
    acceptPrivacy: z.boolean().refine((val) => val === true, {
      message: 'You must accept the privacy policy',
    }),
    emailMarketing: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
