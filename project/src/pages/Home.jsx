import React, {useEffect} from 'react';
import ProductCard from "../components/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import FilterProducts from "../components/FilterProducts.jsx";
import {setProducts} from "../features/productsSlice.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>
                dispatch(setProducts(data.products)))
    }, [])


    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Navbar/>
                <FilterProducts/>
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
            <Footer/>
        </div>

    );
};

export default Home;
