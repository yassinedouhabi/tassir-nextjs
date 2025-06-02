import { hash } from 'bcrypt';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { email, name, password } = await req.json();

  if (!email || !password || !name) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db('authDB');
  const usersCollection = await db.collection('users');

  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'Email already registered' }), { status: 400 });
  }

  const hashedPassword = await hash(password, 10);
  await usersCollection.insertOne({
    email,
    name,
    password: hashedPassword,
  });

  return new Response(JSON.stringify({ message: 'User created' }), { status: 201 });
}
