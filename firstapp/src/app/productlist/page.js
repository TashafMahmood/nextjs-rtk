'use client'

import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const jsonData = await response.json();
                setData(jsonData?.products);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {
                data?.map((item, id) => (
                    <>
                        <h3>Name : {item.title}</h3>
                    </>
                ))
            }
        </div>
    );
};

export default ProductList;
