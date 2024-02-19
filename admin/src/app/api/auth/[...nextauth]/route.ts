import createApolloClient from "@/apollo";
import { SignIn } from "@/apollo/mutations";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) return { ...token, jwt: (user as any).jwt };
      return token;
    },
    session: ({ session, token }) => {
      if (token) (session as any).jwt = token.jwt;
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      authorize: async (credentials, req) => {
        const client = createApolloClient();
        const { email, password } = credentials;

        const signin = await client.mutate({
          mutation: SignIn,
          variables: {
            credentials: {
              email,
              password,
            },
          },
        });
        const { data } = signin;
        if (!data) {
          return null;
        }
        const {
          loginRestaurant: { restaurant, access_token },
        } = data;
        const { name, id } = restaurant;
        return { name, email, id, jwt: access_token };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
