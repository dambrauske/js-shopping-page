import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    productsInCart: [],
    totalAmount: 0,
}

const cart = localStorage.getItem("cart");
const totalAmount = localStorage.getItem("totalAmount");

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        ...initialState,
        productsInCart: cart ? JSON.parse(cart) : initialState.productsInCart,
        totalAmount: totalAmount ? JSON.parse(totalAmount) : initialState.totalAmount
    },
    reducers: {
        setProducts: (state, action) => {
            state.productsData = action.payload
        },
        addToCart: (state, action) => {
            const index = state.productsInCart.findIndex(product => product.id === action.payload.id)

            if (index >= 0) {
                state.productsInCart[index].quantity += 1
            } else {
                const updatedProduct = {...action.payload, quantity: 1}
                state.productsInCart.push(updatedProduct)
            }

            localStorage.setItem("cart", JSON.stringify(state.productsInCart));

        },
        countAmount: (state) => {
            state.totalAmount = state.totalAmountInCart  = state.productsInCart.reduce(
                (accumulator, product) => accumulator + product.price, 0
            )

            localStorage.setItem("totalAmount", state.totalAmount.toString());
        },
    }
})

export const {setProducts, addToCart, countAmount} = productsSlice.actions

export default productsSlice.reducer



