"use server"
import { signIn } from '@/auth'
import { loginSchema, registerSchema } from '@/lib/zod'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation'

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
  }
}

export const registerUserAction = async (values: z.infer<typeof registerSchema>) => { 
  try {
    const { data, success } = registerSchema.safeParse(values);
    if (!success) {
      return {
        error: 'inalid data'
      }
    }

    // we must to verify if the user exist
    const user = await prisma.users.findUnique({
      where: {
        email: data.email
      }
    })

    if (user) {
      return {
        error: "User already exist"
      }
    }

    //hash the password
    const passEncryp = await bcrypt.hash(data.password, 10);

    //create the user
    const res = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: passEncryp,
      },
    });

    return {success: true}

  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }

    return { error: "error 500" }
  }
}

