'use server'

import { registerProducstSchema } from "@/lib/zod";
import fs from "node:fs/promises";
import path from 'path';
import { prisma } from "./prisma";
import { z } from "zod";
import { AuthError } from "next-auth";

export async function uploadFile(formdata: FormData) {

  const file = formdata.get('image') as File

  if (!file || file.size === 0) {

    return { error: 'no file uploaded' }
  }


  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Formato seguro para nombres de archivo

  // Get the file ext
  const extension = path.extname(file.name);

  // generate a unique file name
  const uniqueFileName = `${timestamp}-${crypto.randomUUID()}${extension}`;

  // Path where the file will be stored
  const uploadPath = path.join(process.cwd(), 'public/uploads', uniqueFileName);

  // save the file
  await fs.writeFile(uploadPath, buffer);

  return { fileName: uniqueFileName };
}



export async function addProduct(formData: FormData) {
  
  const uploadedImage = await uploadFile(formData);

  try { 

    const product = await prisma.products.create({
      data: {
        model: formData.get('model') as '',
        categoryId: formData.get('category') as '',
        productImage: uploadedImage.fileName

      }
    })

    return { success: true }


  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }

  }
}
