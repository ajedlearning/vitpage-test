import Image from "next/image"

const Contact = () => {
    return (
        <section className="flex w-full pt-24 md:pt-0">
            <article className="hidden md:inline md:w-full p-0"><Image className="w-full h-full" src='/images/contact-photo.jpg' height={890} width={1080} alt="Imagen de nosotros" /></article>
            <article className="w-[100%] md:w-[100%] pl-9 pt-4 pr-6 md:pl-20 md:pt-6 md:pr-20 text-justify bg-white">

                <h1 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center border-l-8 border-red-700">CONTÁCTANOS</h1>

                <>

                    <form>
                        <div className="space-y-12">

                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    Introduzca sus datos
                                </h2>
                                
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nombre y Apellido
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className=" indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Asunto
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="issue"
                                                id="issue"
                                                autoComplete=""
                                                className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                           Tu Correo
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    
                               <div className="col-span-full">
                                        <label
                                            htmlFor="about"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Tu mensaje
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            Gracias por comunicarte con nosotros.
                                        </p>
                                    </div>

                                </div>
                            </div>


                                                    
                        </div>
                        <div className="lg:mt-6 mb-2 flex items-center justify-end gap-x-6">
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:to-blue-700"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </>




            </article>

        </section>
    )
}

export default Contact;
