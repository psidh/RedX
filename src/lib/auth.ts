import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    redirect: ({ url, baseUrl }: any) => {
      if (url.startsWith("/home")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async authorize(credentials: any, profile: any) {
      const user = await prisma.user.findUnique({
        where: {
          email: profile.email,
        },
      });

      if (!user) {
        // Create a new user if they don't exist
        const newUser = await prisma.user.create({
          email: profile.email,
          name: profile.name,
        });
        return newUser;
      }

      // Return the existing user
      return user;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      if (session.user) {
        session.user.id = token.uid;
        session.user.googleImage = token.picture;
      }
      return session;
    },
  },
};
