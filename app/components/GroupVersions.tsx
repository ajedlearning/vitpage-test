import { getProductsVersionByIdProduct } from '@/app/lib/data'
import ProductsVersion from './ProductsVersion'

export async function GroupVersions({ id }: { id: string }) {
    const versions = await getProductsVersionByIdProduct(id)
    return (
        <>
        {versions?.map((version)=>(
            <ProductsVersion nameVersion={version.name} datasheet= {version.datasheetsLocation} especifications = {version.espeficications} key={version.name} />
        ))}
        </>
    )
}
