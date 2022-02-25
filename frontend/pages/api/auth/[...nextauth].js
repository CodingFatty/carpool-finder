import NextAuth from 'next-auth'
import FacebookProvider from "next-auth/providers/facebook";

const options = {
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET
    })
  ],
  debug: false
}

export default (req, res) => NextAuth(req, res, options)