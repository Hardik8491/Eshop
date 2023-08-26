import NextAuth from "next-auth";
import {authOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const AuthOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: process.env.GIT_CLIENT_ID,
      clientSecret: process.env.GIT_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  
    // ...add more providers here
  ],
  SECRET:"LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gts="
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

