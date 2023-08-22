import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard.jsx";

const Index = () => {

    const [products, setProducts] = useState(() => {
        return JSON.parse(localStorage.getItem("products") || '[]')
    })

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])


    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

    return (
            <div className={"flex flex-wrap gap-10 py-8"}>
                {products.map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                    />
                ))
                }
            </div>

    );
};

export default Index;
