import React from 'react';
import ProductCard from "../components/ProductCard.jsx";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
    const products = useSelector((state) => state.products.productsData)
    console.log(products)

    return (
        <div>
            <Navbar/>
            <div className={"flex bg-white flex-wrap gap-10 py-8 justify-center"}>
                {products && products.map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                    />
                ))
                }
            </div>

        </div>

    );
};

export default Home;
