import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "@/lib/zod"
import { prisma } from "@/app/lib/prisma"
import bcrypt from 'bcryptjs'
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                // console.log({ credentials })
                const { data, success } = loginSchema.safeParse(credentials)

                if (!success) {
                    throw new Error("Invalid Credentials")
                }

                // we must to verify if the user exist in the db
                const encrypPass = '';

                // await new Promise((resolve) => setTimeout(resolve, 3000));
                const user = await prisma.users.findUnique({
                    where: {
                        email: data.email ,
                    }
                })


                if (!user || !user.password) throw new Error("Invalid credentials ");

                // we must to verify if the password is correct
                const isValid = await bcrypt.compare(data.password, user?.password)

                if (!isValid) throw new Error("Invalid credentials ");


                // if (credentials.email !== "arnaldoespinoza1@hotmail.com") {
                //     throw new Error("invalid credentials")
                // }
                // return user object with their profile data
                return user;
            },
        }),],
} satisfies NextAuthConfig