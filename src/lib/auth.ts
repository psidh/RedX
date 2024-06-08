import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_CONFIG = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }

      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.googleImage = token.picture;
      }
      return session;
    },
  },
};
