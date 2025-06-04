import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';
import { compare } from 'bcrypt';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client
          .db('authDB')
          .collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error(
            'No user found or the password is incorrect.'
          );
        }

        const isValid = await compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Incorrect password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.username = token.username;
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
