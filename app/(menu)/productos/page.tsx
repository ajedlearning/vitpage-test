import ShowProducts from '@/app/components/ShowProducts'

import {getProducts} from '@/app/lib/data'

const page = async () => {
  const products = await getProducts()
  return (
    <>
    <ShowProducts products={products}/>
    </>
  )
}

export default page