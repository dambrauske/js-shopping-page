import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../features/productsSlice.jsx";

const ProductPageDescription = ({singleProduct}) => {
    const dispatch = useDispatch()
    const addToToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="text-xl">{singleProduct.brand}</div>
            <div className="text-2xl font-bold">{singleProduct.title}</div>
            <div className="flex flex-col">
                <div>Description:</div>
                <div>{singleProduct.description}</div>
            </div>
            <div>Price: {singleProduct.price} €</div>
            <div
                onClick={() => addToToCart(singleProduct)}
                className="bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded ease-out duration-300 w-40 hover:text-slate-50 hover:bg-yellow-500">
                add to cart
            </div>
        </div>
    );
};

export default ProductPageDescription;
