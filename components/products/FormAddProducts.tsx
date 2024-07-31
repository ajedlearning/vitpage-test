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




const FormAddProducts = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerProducstSchema>>({
        resolver: zodResolver(registerProducstSchema),
        defaultValues: {
            model: "",
            category: "",
            image:""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof registerProducstSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                                                <SelectItem value="ds">m@example.com</SelectItem>
                                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                                <SelectItem value="m@support.com">m@support.com</SelectItem>
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
                                            <Input type="file" placeholder="Imagen" {...field} />
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

