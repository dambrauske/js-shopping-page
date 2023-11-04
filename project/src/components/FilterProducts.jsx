import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../features/productsSlice.jsx";

const FilterProducts = () => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const filterProducts = (productsArray, category, criteria) => {
        if (criteria === 'all') {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data =>
                    dispatch(setProducts(data.products)))
        } else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data =>
                    dispatch(setProducts(data.products.filter(p => p.category === criteria)))
                )
        }
    }

    return (
        <div className="flex gap-4 items-center px-4">
            <div className="flex">
                <div
                    onClick={() => filterProducts(products, 'category', 'all')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">all products
                </div>
                <div
                    onClick={() => filterProducts(products, 'category', 'smartphones')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">smartphones
                </div>
                <div
                    onClick={() => filterProducts(products, 'category', 'laptops')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">laptops
                </div>
                <div
                    onClick={() => filterProducts(products, 'category', 'skincare')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">skincare
                </div>
                <div
                    onClick={() => filterProducts(products, 'category', 'groceries')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">groceries
                </div>
                <div
                    onClick={() => filterProducts(products, 'category', 'home-decoration')}
                    className="hover:underline text-blue-400 px-2 py-2 cursor-pointer font-light">home decor
                </div>
            </div>

        </div>
    );
};

export default FilterProducts;
