import { getProductsVersionByIdProduct } from '@/app/lib/data'
import ProductsVersion from './ProductsVersion'

export async function GroupVersions({ id }: { id: string }) {
    const versions = await getProductsVersionByIdProduct(id)
    return (
        <>
        {versions?.map((version)=>(
            <ProductsVersion idProduct = {id} nameVersion={version.name} datasheet= {version.datasheetsLocation} especifications = {version.espeficications} key={version.id} />
        ))}
        </>
    )
}
