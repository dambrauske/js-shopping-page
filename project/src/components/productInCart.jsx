import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart, removeProductFromCart, removeSameIdProductsFromCart} from "../features/productsSlice.jsx";

const ProductInCart = ({product}) => {

    const dispatch = useDispatch()

    return (
        <div
            className={"flex gap-20 p-4 items-center border-b-2"}>
            <div className={"w-12 h-16"}>
                <img className={"w-full h-full object-cover"}
                     src={product.thumbnail} alt=""/>
            </div>
            <div className={"flex flex-col gap-1 w-52"}>
                <div>Apple</div>
                <div className={"font-bold tracking-wider"}>{product.title}</div>
                <div className={"font-light"}>{product.price} €</div>
            </div>
            <div className={"flex gap-3"}>
                <div
                    onClick={() => dispatch(addToCart(product))}
                    className={"w-6 h-6 bg-white flex justify-center items-center hover:bg-green-200 ease-out duration-300 cursor-pointer"}>
                    <i className="fas fa-plus"></i>
                </div>
                <div>{product.quantity}</div>
                <div
                    onClick={() => dispatch(removeProductFromCart(product.id))}
                    className={"w-6 h-6 bg-white flex justify-center items-center hover:bg-green-200 ease-out duration-300 cursor-pointer"}>
                    <i className="fas fa-minus"></i>
                </div>
            </div>
            <div
                onClick={() => dispatch(removeSameIdProductsFromCart(product.id))}
                className={"text-xs flex gap-1 hover:text-red-600 cursor-pointer ease-out duration-300"}>
                <i className="far fa-trash-alt"></i>
                <div>Remove</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-light"}>Total:</div>
                <div>{product.price * product.quantity} €</div>
            </div>
        </div>
    );
};

export default ProductInCart;
