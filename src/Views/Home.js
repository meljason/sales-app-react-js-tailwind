import React, { useEffect, useState } from 'react'
import Loader from '../Components/Spinner'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {

    const url = `https://5fb02f3a7edddb00164682d5.mockapi.io/products/?page=2&limit=10`;

    let products = useAxiosGet(url)

    let content = null

    if (products.error) {
        content = <p>There was an error, please refresh or try again later.</p>
    }

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content = 
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />

            </div>
        )
        
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home
