import ProductDrivers from "@/app/components/ProductDrivers"
import {getProductsByCategory} from '@/app/lib/data'

const page = async ({ params }: { params: { id: string } }) => {
    const products = await getProductsByCategory(parseInt(params.id));
    return (
        <>
            {products?.map((product) => (
                <ProductDrivers key={product.id} product={product.model} idProd={product.id} />
            ))}
        </>
    )
}

export default page
