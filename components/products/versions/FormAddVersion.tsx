"use client"

import { z } from "zod"
import { registerVersionSchema } from '@/lib/zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { addProduct, uploadFile } from "@/app/lib/actions-products"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Products } from "@prisma/client"

const FormAddVersion = ({ products }: { products: Products[] | undefined }) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerVersionSchema>>({
        resolver: zodResolver(registerVersionSchema),
        defaultValues: {
            version: "",
            specifications: "",
            product: "",
            dataSheet: null
        },
    })

    const [error, setError] = useState<string | null>(null)
    const router = useRouter();

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof registerVersionSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const formData = new FormData()
        formData.append("model", values.version)
        formData.append("product", values.product)

        // if there is a image selected, add to formData
        if (values.dataSheet && values.dataSheet[0]) {
            formData.append("image", values.dataSheet[0]) // Añade la imagen a los datos del formulario
        }

        const response = await addProduct(formData);
        if (response?.error) {
            setError(response.error)
        } else {
            router.push("/vitproducts")
        }

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <div className="w-[80%] mx-auto">
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="version"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Version</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Version" {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="specifications"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Especificaciones</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Procedor Itel dualcore, memoria ram 250gb, Disco 500 gb" {...field} />
                                        </FormControl>
                                        <FormDescription>Introduzca las especificaciones separadas por coma ,</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="product"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Equipos</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seleccione un equipo" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    products?.map((product)=>(
                                                        <SelectItem key={product.id} value={product.id}>{product.model}</SelectItem>

                                                    ))
                                                }


                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="dataSheet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>DataSheet</FormLabel>
                                        <FormControl>
                                            <Input type="file" id="image" placeholder="Imagen" onChange={(e) => field.onChange(e.target.files)} />
                                        </FormControl>
                                        <FormDescription>Opcional</FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-full my-4 py-4 md:py-4 md:px-4">
                            <Button type="submit">Enviar</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default FormAddVersion