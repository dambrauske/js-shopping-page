import React from 'react';
import ProductInCart from "../components/productInCart.jsx";
import {useSelector} from "react-redux";

const MyCart = () => {

    const cart = useSelector((state) => state.products.productsInCart)
    const totalAmount = useSelector((state) => state.products.totalAmount)
    const totalQuantity = useSelector((state) => state.products.totalQuantity)


    return (
        <div className={"flex justify-center items-center bg-white py-8"}>
            {cart.length > 0 &&
                <div className={"bg-slate-50 px-8 py-4 rounded-md custom-shadow"}>
                    <div className={"text-yellow-500"}>Shopping Cart</div>
                    <div>
                        {cart.map((product) => (
                            <ProductInCart
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                    <div className={"flex gap-10 justify-end p-4"}>
                        <div className={"text-yellow-500"}>Order summary:</div>
                        <div className={"flex flex-col gap-3"}>
                            <div>Items: {totalQuantity}</div>
                            <div>Total price: {totalAmount} EUR</div>
                            <div
                                className={"bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-md ease-out duration-300 hover:text-white hover:bg-yellow-500"}>
                                CHECKOUT
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
};

export default MyCart;
