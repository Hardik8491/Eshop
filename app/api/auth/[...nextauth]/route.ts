import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: "d25b6868e41201aedd50",
      clientSecret: "e76f0cdc68c6ef83c0ba7a7b5d63fc659bc2797a",
    }),
    GoogleProvider({
      clientId:"979014586013-g0qfv6ue8ittbse32au0omo5odosrof6.apps.googleusercontent.com",
      clientSecret:'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',
    }),

    // ...add more providers here
  ],
  secret: "HARDIK8491",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github"

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [

//     GithubProvider({
//       clientId: "d25b6868e41201aedd50",
//      clientSecret:"e76f0cdc68c6ef83c0ba7a7b5d63fc659bc2797a",
//     }),
//     // ...add more providers here
//   ],
// })
