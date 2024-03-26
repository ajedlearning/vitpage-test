import ShowProducts from "@/app/components/ShowProducts"
import { getProductsByCategory } from "@/app/lib/data"


const page = async ({ params }: { params: { id: string } }) => {

  const productsByCatg = await getProductsByCategory(parseInt(params.id))
  return (

   <>
    <ShowProducts products={productsByCatg}/>
   </>

   
 
  )
}

export default page