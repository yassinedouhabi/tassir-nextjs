import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('authDB');

    const data = await req.json();

    if (!data.email || !data.password) {
      return new Response(
        JSON.stringify({
          error: 'Missing email or password',
        }),
        { status: 400 }
      );
    }

    data.password = await bcrypt.hash(data.password, 10);

    const users = db.collection('users');

    const existingUser = await users.findOne({
      email: data.email,
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'User already exists' }),
        { status: 409 }
      );
    }

    const result = await users.insertOne(data);

    return new Response(
      JSON.stringify({
        message: 'User registered',
        id: result.insertedId,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
