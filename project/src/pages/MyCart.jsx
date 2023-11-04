import React from 'react';
import ProductInCart from "../components/productInCart.jsx";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";

const MyCart = () => {

    const cart = useSelector((state) => state.products.cart)
    const totalQuantity = useSelector((state) => state.products.totalQuantity)

    const calculateTotalprice = (productsArray) => {
        let totalPrice = 0
        for (let i = 0; i < productsArray.length; i++) {
            totalPrice += productsArray[i].price * productsArray[i].quantity
        } return totalPrice
    }

    return (
        <div>
            <Navbar/>
            <div className={"flex justify-center items-center bg-white py-8"}>
                {cart.length > 0 &&
                    <div className={"bg-slate-50 px-8 py-4 rounded-md custom-shadow"}>
                        <div className={"text-yellow-500"}>Shopping Cart</div>
                        <div>
                            {cart.length > 0 && cart.map((product, i) => (
                                <ProductInCart
                                    key={i}
                                    product={product}
                                />
                            ))}
                        </div>
                        <div className={"flex gap-10 justify-end p-4"}>
                            <div className={"text-yellow-500"}>Order summary:</div>
                            <div className={"flex flex-col gap-3"}>
                                <div>Items: {totalQuantity}</div>
                                <div>Total price: {calculateTotalprice(cart)} €</div>
                                <div
                                    className={"bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-md ease-out duration-300 hover:text-white hover:bg-yellow-500"}>
                                    CHECKOUT
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default MyCart;
