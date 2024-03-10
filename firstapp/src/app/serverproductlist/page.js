import React from 'react'
import TestButton from './TestButton'

const fetchProduct = async () => {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

const ServerProductList = async () => {
    let products = await fetchProduct();
    return (
        <div>
            <h1>Server Side Rendering  Product List</h1>
            {
                products?.map((item, id) => (
                    <>
                        <h3>Name : {item.title}</h3>
                        <TestButton price={item.price} />
                    </>
                ))
            }
        </div>
    )
}

export default ServerProductList
