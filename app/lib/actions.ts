'use server'
// actions/createUser.ts
import { prisma } from '@/app/lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido").trim(),
  email: z.string().min(1, "El correo es requerido").email('Correo Inválido'),
  password: z.string().min(8, "El password debe ser del al menos 8 carácteres").trim(),
//   password2: z.string().min(8, "La contraseña debe ser del al menos 8 carácteres").trim(),
});

export async function createUser(formData: FormData) {
  const parsedData = FormSchema.safeParse({
    fullName: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('pass') as string,
    // password2: formData.get('pass2') as string,
  });

  if (!parsedData.success) {
    const formattedErrors = parsedData.error.issues.map(issue => ({
      path: issue.path.join('.'),
      message: issue.message,
    }));
    return { error: formattedErrors };
  }

  const { fullName, email, password } = parsedData.data;
  const pass2 = formData.get('pass2');
  if (password !== pass2) {
    return { error: [{ path: 'password2', message: "Los passwords no coinciden" }] };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.users.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });
    // return { success: true, message: 'User created successfully', user };
} catch (error) {
    return { error: [{ path: '', message: 'Database Error: Failed to Create User.' }] };
}

redirect('/');
  

//   revalidatePath('/dashboard/invoices');
}
