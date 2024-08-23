import { object, optional, string, any } from "zod"

export const loginSchema = object({
  email: string()
    .min(1, "Email es requerido")
    .email("Invalid email"),
  password: string()
    .min(1, "Password es requerido")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const registerSchema = object({
  email: string()
    .min(1, "Email es requerido")
    .email("Invalid email"),
  password: string()
    .min(1, "Password es requerido")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  name: string({ required_error: "Name es requerido" })
    .min(1, "Name es requerido")
})

export const registerProducstSchema = object({
  model: string()
    .min(1, "El modelo es requerido"),
  category: string()
    .min(1, "La Categoría es requerida"),
    image:  any().optional(),

})
export const registerVersionSchema = object({
  version: string()
    .min(1, "La version es requerida"),
  specifications: string()
    .min(1, "Las especificaciones son requeridas")
    .max(90, "Solo se permiten 90 caracteres"),
  product: string()
    .min(1, "Debe selecionar un equipo"),
    dataSheet:  any().optional(),

})