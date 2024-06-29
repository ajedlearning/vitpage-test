import ListTypeDrivers from './ListTypeDrivers'
import { getOperatingSystem } from '@/app/lib/data'


const ProductDrivers = async ({product, idProd}:{product: string, idProd: number}) => {
    // const driverProducts = await getDriverProductsByIdProd(idProd);
    const operatingSystem = await getOperatingSystem();
    // const driverProducts2 = await getDriverProductsByIdProd(idProd);
    return (
        <section className="mx-auto w-[70%]">


            <article>
                <h2 className="py-4 font-bold">{product}</h2>
                {
                   operatingSystem?.map((os)=>(                       
                       <ListTypeDrivers  key={os.id} os={os.name} idOs={os.id} idProd={idProd}    />
                   )) 
                }

            </article>



        </section>
    )
}

export default ProductDrivers