import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const AuthOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: "d25b6868e41201aedd50",
      clientSecret:"e76f0cdc68c6ef83c0ba7a7b5d63fc659bc2797a",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  
    // ...add more providers here
  ],
   secret:process.env.NEXT_AUTH_SECRET

};
const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };

