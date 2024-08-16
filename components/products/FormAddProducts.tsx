"use client"

import { z } from "zod"
import { registerProducstSchema } from '@/lib/zod'
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





const FormAddProducts = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerProducstSchema>>({
        resolver: zodResolver(registerProducstSchema),
        defaultValues: {
            model: "",
            category: "",
            image: null
        },
    })

    const [error, setError] = useState<string | null>(null)
    const router = useRouter();


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof registerProducstSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const formData = new FormData()
        formData.append("model", values.model)
        formData.append("category", values.category)

        // if there is a image selected, add to formData
        if (values.image && values.image[0]) {
            formData.append("image", values.image[0]) // Añade la imagen a los datos del formulario
        }

        await addProduct(formData);

        const response = await addProduct(formData);
        if (response?.error) {
            setError(response.error)
        } else {
            router.push("/users")
        }


        // console.log("Formulario enviado con los siguientes datos:")
        // console.log({
        //    name : formData.get('model'),
        //    category : formData.get('category'),
        //    image : formData.get('image'),
        // })
        // console.log(formData)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <div className="w-[80%] mx-auto">
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Modelo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Modelo" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-full py-2 md:py-4 md:px-4">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Categoría</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona la categoría" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="clz93y56v0001n2rs80rnjqry">Escritorio</SelectItem>
                                                <SelectItem value="clz93znw80002n2rs62eelmf7">Tabletas</SelectItem>
                                                <SelectItem value="clz93v8h90000n2rsprgveh2r">Portatiles</SelectItem>
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
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imagen</FormLabel>
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

export default FormAddProducts

