import { getProductsVersionById } from '@/app/lib/data'
import ProductsVersion from './ProductsVersion'

export async function GroupVersions({ id }: { id: number }) {
    const versions = await getProductsVersionById(id)
    return (
        <>
        {versions.map((version)=>(
            <ProductsVersion nameVersion={version.name} key={version.name} />
        ))}
        </>
    )
}
