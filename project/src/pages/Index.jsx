import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard.jsx";
import {useSelector} from "react-redux";

const Index = () => {

    const products = useSelector((state) => state.products.productsData)

    return (
            <div className={"flex bg-white flex-wrap gap-10 py-8"}>
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
