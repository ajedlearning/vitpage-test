import ListTypeDrivers from './ListTypeDrivers'
import { getDriverProductsByIdProd } from '@/app/lib/data'


const ProductDrivers = async ({product, idProd}:{product: string, idProd: number}) => {
    const driverProducts = await getDriverProductsByIdProd(idProd);
    const driverProducts2 = await getDriverProductsByIdProd(idProd);
    return (
        <section className="mx-auto w-[70%]">


            <article>
                <h2 className="py-4 font-bold">{product}</h2>
                {
                   driverProducts?.map((driverProduct)=>(                       
                       <ListTypeDrivers  key={driverProduct.id} os={driverProduct.operatingSystems?.name} idProd={driverProduct.prodId}  data = {driverProducts2}  />
                   )) 
                }

            </article>



        </section>
    )
}

export default ProductDrivers