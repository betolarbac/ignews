import {query as q } from 'faunadb';

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        authorization: {
          params: {
            scope: 'read:user',
          },
        },
      }),
    // ...add more providers here
  ],
 
  callbacks: {
        async signIn({user, account, profile}){
            const { email } = user

            try {
                await fauna.query(
                  //verificar se um usuario existe no faunadb 
                   q.If(
                     q.Not(
                       q.Exists(
                        q.Match(
                          q.Index('user_by_email'),
                          q.Casefold(user.email)
                        )
                       )
                     ), //se não existir criar um novo
                     q.Create(
                      q.Collection('users'),
                      {data: { email } }
                  ),//se existir pegar o usuario e validar 
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(user.email)
                    )
                  )
                   )
                )
                return true
            } catch {
                return false
            }

        
      },
  }
})