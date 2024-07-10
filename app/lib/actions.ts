'use server'
import { prisma } from '@/app/lib/prisma'
import { z } from 'zod';

import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string(),
    password: z.string(),
    active: z.boolean(),
});
const CreateUser = FormSchema.omit({ id: true });

export async function createUser(formData: FormData) {

    // validated two password match
    if (formData.get('pass') !== formData.get('pass2')) {
        throw new Error(" passwords don't match ");
    }

    const { fullName, email, password, active } = CreateUser.parse({
        fullName: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('pass'),
        active: true,
    });

    try {
        const query = await prisma.users.create(
            {
                data: {
                    fullName,
                    email,
                    password,
                    active
                },
            }
        )
        console.log(query);
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }

    redirect('/auth/register');
}