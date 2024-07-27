import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                console.log({ credentials })
                if (credentials.email !== "arnaldoespinoza1@hotmail.com") {
                    throw new Error("invalid credentials")
                }
                // return user object with their profile data
                return {
                    id: "1",
                    name: "Arnaldo Espinoza",
                    email: "arnaldoespinoza1@hotmail.com",

                }
            },
        }),],
} satisfies NextAuthConfig