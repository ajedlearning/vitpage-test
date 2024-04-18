import ProductDrivers from '@/app/components/ProductDrivers'
import {getProducts} from '@/app/lib/data'

const page = async () => {
  const products = await getProducts();
  return (
    <>
     
       

    </>
  )
}

export default page