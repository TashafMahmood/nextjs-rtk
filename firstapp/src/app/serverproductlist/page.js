import React from 'react'

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
                    </>
                ))
            }
        </div>
    )
}

export default ServerProductList
