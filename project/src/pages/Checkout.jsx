import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useForm} from "react-hook-form";
import ProductInCheckout from "../components/ProductInCheckout.jsx";
import {useNavigate} from "react-router-dom";
import {clearShoppingDetails} from "../features/productsSlice.jsx";

const Checkout = () => {

    const cart = useSelector((state) => state.products.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const calculateTotalPrice = (productsArray) => {
        let totalPrice = 0
        for (let i = 0; i < productsArray.length; i++) {
            totalPrice += productsArray[i].price * productsArray[i].quantity
        }
        return totalPrice
    }
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = () => {
        alert('Thank you for your oder!')
        localStorage.clear()
        dispatch(clearShoppingDetails())
        navigate("/")
    }


    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Navbar/>
                <div className="flex py-4 px-10 gap-10 justify-center">
                    <div className="flex flex-col gap-4 bg-slate-100 py-4 px-10 rounded-md custom-shadow grow">
                        <div className="font-bold">Checkout</div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-2">
                            <div className="flex gap-10">
                                <input
                                    id="email"
                                    {...register("email", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                                                    return "Email is not valid"
                                                }
                                            } else return "Email cannot be blank"
                                        },
                                    })}
                                    placeholder="email"
                                    type="email"
                                    className="rounded p-1 grow outline-none"
                                />

                                <input
                                    id="phone"
                                    {...register("phone", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value && !/^(\+\d{1,3})?\d{9,15}$/.test(value)) {
                                                    return "Mobile phone is not valid"
                                                }
                                            } else return "Mobile phone cannot be blank"
                                        },
                                    })}
                                    placeholder="phone number"
                                    type="text"
                                    className="rounded p-1 grow outline-none"
                                />

                            </div>
                            <div className="flex gap-10">
                                <div className="h-3 w-1/2">
                                    {errors.email &&
                                        <div className="text-xs text-red-600">{errors.email.message}</div>
                                    }
                                </div>
                                <div className="h-3 w-1/2">
                                    {errors.phone &&
                                        <div className="text-xs text-red-600">{errors.phone.message}</div>
                                    }
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <input
                                    id="name"
                                    {...register("name", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value?.length >= 20) {
                                                    return "Name should be less than 20 characters"
                                                }
                                            } else return "Name cannot be blank"
                                        },
                                    })}
                                    placeholder="name"
                                    type="text"
                                    className="rounded p-1 grow outline-none"
                                />

                                <input
                                    id="surname"
                                    {...register("surname", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value?.length >= 40) {
                                                    return "Surname should be less than 40 characters"
                                                }
                                            } else return "Surname cannot be blank"
                                        },
                                    })}
                                    placeholder="surname"
                                    type="text"
                                    className="rounded p-1 grow outline-none"
                                />
                            </div>
                            <div className="flex gap-10">
                                <div className="h-3 w-1/2">
                                    {errors.name &&
                                        <div className="text-xs text-red-600">{errors.name.message}</div>
                                    }
                                </div>
                                <div className="h-3 w-1/2">
                                    {errors.surname &&
                                        <div className="text-xs text-red-600">{errors.surname.message}</div>
                                    }
                                </div>
                            </div>

                            <textarea
                                id="address"
                                {...register("address", {
                                    validate: (value) => {
                                        if (!value) return "Address cannot be blank"
                                    },
                                })}
                                placeholder="address"
                                className="rounded p-1 outline-none"
                                rows="3"
                                maxLength="200"
                            />
                            <div className="h-3 w-1/2">
                                {errors.address &&
                                    <div className="text-xs text-red-600">{errors.address.message}</div>
                                }
                            </div>

                            <div className="flex gap-10">
                                <input
                                    id="city"
                                    {...register("city", {
                                        validate: (value) => {
                                            if (!value) return "City cannot be blank"
                                        },
                                    })}
                                    placeholder="city"
                                    type="text"
                                    className="rounded p-1 outline-none grow"
                                />

                                <input
                                    id="country"
                                    {...register("country", {
                                        validate: (value) => {
                                            if (!value) return "Country cannot be blank"
                                        },
                                    })}
                                    placeholder="Country"
                                    type="text"
                                    className="rounded p-1 outline-none grow"
                                />
                            </div>
                            <div className="flex gap-10">
                                <div className="h-3 w-1/2">
                                    {errors.city &&
                                        <div className="text-xs text-red-600">{errors.city.message}</div>
                                    }
                                </div>
                                <div className="h-3 w-1/2">
                                    {errors.country &&
                                        <div className="text-xs text-red-600">{errors.country.message}</div>
                                    }
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <input
                                    id="cardNumber"
                                    {...register("cardNumber", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value && !/^\d{12,19}$/.test(value)) {
                                                    return "Card number is not valid"
                                                }
                                            } else return "Card number cannot be blank"
                                        },
                                    })}
                                    placeholder="Credit card number"
                                    type="text"
                                    className="rounded p-1 grow outline-none"
                                />

                                <input
                                    id="cardName"
                                    {...register("cardName", {
                                        validate: (value) => {
                                            if (value) {
                                                if (value?.length > 40) {
                                                    return "Card holder name should be no longer than 40 characters"
                                                }
                                            } else return "Card holder name cannot be blank"
                                        },
                                    })}
                                    placeholder="Card holder name"
                                    type="text"
                                    className="rounded p-1 grow outline-none"
                                />
                            </div>
                            <div className="flex gap-10">
                                <div className="h-3 w-1/2">
                                    {errors.cardNumber &&
                                        <div className="text-xs text-red-600">{errors.cardNumber.message}</div>
                                    }
                                </div>
                                <div className="h-3 w-1/2">
                                    {errors.cardName &&
                                        <div className="text-xs text-red-600">{errors.cardName.message}</div>
                                    }
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-400 ml-auto px-6 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-md ease-out duration-300 hover:text-white hover:bg-yellow-500">
                                Place order
                            </button>
                        </form>
                    </div>
                    <div className="bg-slate-100 rounded custom-shadow py-4 px-10 flex flex-col gap-4 h-[30rem]">
                        <div className="font-bold">Order summary:</div>
                        <div className="flex flex-col gap-4 overflow-y-auto">
                            {cart.length > 0 && cart.map((product, i) => (
                                <ProductInCheckout
                                    key={i}
                                    product={product}
                                />
                            ))}
                        </div>
                        <div className="font-bold">Total price: {calculateTotalPrice(cart)} €</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
