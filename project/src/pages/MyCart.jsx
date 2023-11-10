import React from 'react';
import ProductInCart from "../components/productInCart.jsx";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MyCart = () => {

    const cart = useSelector((state) => state.products.cart)
    const totalQuantity = useSelector((state) => state.products.totalQuantity)
    const calculateTotalPrice = (productsArray) => {
        let totalPrice = 0
        for (let i = 0; i < productsArray.length; i++) {
            totalPrice += productsArray[i].price * productsArray[i].quantity
        } return totalPrice
    }

    if (cart.length === 0) return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Navbar/>
                <div className="flex flex-col gap-2 p-4 items-center">
                    <div>Cart is empty</div>
                    <Link to="/"
                          className="text-blue-400 hover:underline">
                        Continue shopping</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Navbar/>
                <div className="flex justify-center items-center bg-white py-8">
                    {cart.length > 0 &&
                        <div className="bg-slate-50 px-8 py-4 rounded-md custom-shadow">
                            <div className="text-yellow-500">Shopping Cart</div>
                            <div>
                                {cart.length > 0 && cart.map((product, i) => (
                                    <ProductInCart
                                        key={i}
                                        product={product}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-10 justify-end p-4">
                                <div className="text-yellow-500">Order summary:</div>
                                <div className="flex flex-col gap-3">
                                    <div>Items: {totalQuantity}</div>
                                    <div>Total price: {calculateTotalPrice(cart)} €</div>
                                    <Link to="/checkout"
                                        className="bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-md ease-out duration-300 hover:text-white hover:bg-yellow-500">
                                        CHECKOUT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default MyCart;
