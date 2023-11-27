import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'f3e1b6ee4cf1fefaba33',
            clientSecret: '318d62ff75d5871c04a05aa0f2d851d5c9d6e75f',
        }),
    ],
    secret : 'gkwlswkd!159'

};
export default NextAuth(authOptions);