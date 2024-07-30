import ProductDrivers from "@/app/components/ProductDrivers"
import {getProductCategoriesById, getProductsByCategory} from '@/app/lib/data'
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
    const products = await getProductsByCategory(params.id);
    const category = await getProductCategoriesById(params.id);
    return (
        <>
            <div className="">
            <Image className='mx-auto' src={`/images/${category?.categoryImage}`} width={399} height={173} alt='Portátiles'/>
            </div>
            {products?.map((product) => (
                <ProductDrivers key={product.id} product={product.model} idProd={product.id} />
            ))}
        </>
    )
}


export default page
