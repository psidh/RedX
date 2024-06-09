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
    redirect: ({ url, baseUrl }: any) => {
      // Redirect to /complete-the-signup after sign-in
      if (url.startsWith("/complete-the-signup")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/complete-the-signup`;
    },
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }

      return token;
    },
    session: async ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.googleImage = token.picture;
      }
      return session;
    },
  },
};
