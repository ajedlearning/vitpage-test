import Image from 'next/image'
import { Products } from '@prisma/client'
import { GroupVersions } from './GroupVersions';


const ShowProducts = ({
    products,
}: {
    products: Products[] | undefined;
}) => {
    return (
        <>

            {products?.map((product) => (
                <article key={product.model} className='flex flex-col md:flex-row mx-2'>

                    <article className='flex justify-center items-center  md:w-[50%] w-[100%] p-4 order-1 md:-order-none'><Image src={`/images/${product.productImage}`} height={463} width={768} alt="Imagen de nosotros" /></article>
                    <article className=' md:w-[50%] w-[100%] p-4 ' >
                        <h2 className='font-bold p-1 mb-6 text-xl'>Modelo {product.model}</h2>


                        <GroupVersions id={product.id} />



                    </article>

                </article>
            ))}
        </>

    )
}

export default ShowProducts