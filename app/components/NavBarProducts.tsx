'use client'
import { useState } from 'react'
import ProductDetails from './ProductDetails'

const products = [
  {
    id: '1',
    name: 'ESCRITORIO',
    image: '/images/desktop.jpg',
  },
  {
    id: '2',
    name: 'PORTATILES',
    image: '/images/portatiles.webp',
  },
  {
    id: '3',
    name: 'MINI COMPUTADOR',
    image: '/images/minicomputador.webp',
  },
  {
    id: '4',
    name: 'TABLETAS',
    image: '/images/tabletas.webp',
  },
  {
    id: '5',
    name: 'SERVIDORES',
    image: '/images/servidores.webp',
  },
] 

interface Prod {
  id: string,
  name: string,
  image: string,
}

function NavBarProducts() {
  const [mark, setMark] = useState<string>('')
  const [productInfo, setProductInfo] = useState<Prod>({ id: '1', name: 'ESCRITORIO', image: '/images/desktop.jpg' })

  const changeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idPro = e.currentTarget.id;
    const result = products.find((product) => product.id === idPro);
    setProductInfo(result || { id: '1', name: 'ESCRITORIO', image: '/images/desktop.jpg' })
    setMark(result?.id || '')
  }

  return (
    <>
      <nav className='flex flex-col text-sm md:flex-row justify-between md:w-[80%] w-[50%] md:mx-auto p-6 font-bold'>
        {products.map((prod) => (
          <button onClick={changeProduct} id={prod.id} key={prod.id} className={`${mark === prod.id ? 'border-black': '' } hover:border-black rounded-md p-2 border border-transparent`}>{prod.name}</button>
        ))}

      </nav>

      <ProductDetails product={productInfo} />



      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, nostrum laudantium illum magni, omnis dolore voluptatibus, odio consequuntur fugiat culpa necessitatibus. Unde dolore aut voluptatem quaerat quo aspernatur eius pariatur!
        Deserunt itaque repellendus magni accusamus ea maxime nisi dolorem, soluta minima perferendis exercitationem quibusdam! Quis non at, quasi omnis perspiciatis ratione ea saepe temporibus assumenda aut iusto alias. Maxime, delectus!
        Fugit accusantium, voluptas fuga earum exercitationem non voluptatem nesciunt adipisci architecto eveniet vero aut laboriosam vitae saepe natus, ad nobis quisquam sed nisi quibusdam dolorum fugiat libero? Esse, architecto quaerat!
        Consequuntur facilis blanditiis rerum debitis repellendus illum vero quasi consequatur error quidem odit non maxime totam, earum eos. Sed sunt doloremque laboriosam velit magnam quis ea incidunt odit perferendis repellat!
        Maiores nam neque expedita vero suscipit laudantium. Ut molestias et unde libero sequi provident ipsa. Omnis illo magnam eos quae enim. Maiores nobis rem magnam aperiam perspiciatis aut culpa laboriosam?
        Doloribus cupiditate, dolorum recusandae error dolores nobis nesciunt maxime minus libero. Voluptas repellendus, et saepe doloribus accusantium quaerat dolorem libero necessitatibus, nihil quis ea possimus odit tempore dolores, enim perferendis?
        Voluptatibus rem dolores dolore assumenda? Harum delectus, maxime dicta corporis magnam adipisci obcaecati explicabo. Aut sequi numquam sint facilis et maiores repellendus voluptatum est, reiciendis illum tempora molestiae. Provident, qui.
        Excepturi quas voluptatem sed, odio facere qui modi? Eligendi delectus similique aliquid et ea ut atque id? Earum animi ipsa aspernatur et totam fuga incidunt, iste quod dignissimos at vitae.
        Voluptatibus, corporis eveniet sapiente provident sit minus repellendus voluptate adipisci quaerat. Quos optio distinctio tempore quod molestiae a, veritatis quibusdam assumenda expedita provident obcaecati nesciunt cupiditate eum voluptatem accusantium qui!
        Quae facere cum recusandae odio! Reiciendis velit aut rerum incidunt. Nesciunt fuga accusamus voluptate asperiores! Esse sapiente minima, recusandae quisquam velit cum obcaecati facilis inventore illo culpa tempore quod voluptate!</p>
    </>
  )
}

export default NavBarProducts