import React from 'react'
import NavBarProducts from './NavBarProducts'
import ProductDetails from './ProductDetails'

const Products = () => {
    return (
        <div className='w-full pt-10 '>
                <h2 className="mb-0 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">PRODUCTOS</h2>

            <NavBarProducts />
            <ProductDetails/>

        </div>
    )
}

export default Products