import NextAuth from "next-auth"
// import { BuiltInProviders } from "next-auth/providers"
import GithubProvider from "next-auth/providers/github"
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
// import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./clientPromise"
import connectMongo from "../../../../backend/connection"
import User from "../../../../backend/models/User"
import { compare } from "bcryptjs"

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: process.env.EMAIL_FROM
    //   // from: 'NextAuth.js <no-reply@example.com>'
    // }),
    // GithubProvider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(error => {error: "Connection Failed...!"})

        // check user existence
        const result = await User.findOne({ email: credentials.email })
        if(!result) {
          throw new Error("User not found...! Please Sign Up.")
        }

        // compare() from bcrypt
        const checkPassword = await compare(credentials.password, result.password)

        // Incorrect password
        if(!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password mismatch")
        }
        return result
      }
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
})