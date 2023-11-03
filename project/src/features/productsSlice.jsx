import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    productsInCart: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const updateProductQuantity = (productsInCart, productId, operation) => {
    return productsInCart.map(product => {
        if (product.id === productId) {
            const updatedQuantity = operation === 'increment' ? product.quantity + 1 : product.quantity - 1;
            return { ...product, quantity: updatedQuantity };
        }
        return product;
    })
}

const updateTotalAmount = (productsInCart) => {
    return productsInCart.reduce((total, product) => {
        return total + product.quantity * product.price;
    }, 0)
}

const updateTotalQuantity = (productsInCart) => {
    return productsInCart.reduce((total, product) => {
        return total + product.quantity
    }, 0)
}

const cart = localStorage.getItem("cart");
const totalAmount = localStorage.getItem("totalAmount");
const totalQuantity = localStorage.getItem("totalQuantity");

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        ...initialState,
        productsInCart: cart ? JSON.parse(cart) : initialState.productsInCart,
        totalAmount: totalAmount ? JSON.parse(totalAmount) : initialState.totalAmount,
        totalQuantity: totalQuantity ? JSON.parse(totalQuantity) : initialState.totalQuantity,
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

            localStorage.setItem("cart", JSON.stringify(state.productsInCart))

            const newTotalQuantity = updateTotalQuantity(state.productsInCart)
            state.totalQuantity = newTotalQuantity
            localStorage.setItem("totalQuantity", newTotalQuantity)

            const newTotalAmount = updateTotalAmount(state.productsInCart)
            state.totalAmount = newTotalAmount
            localStorage.setItem("totalAmount", newTotalAmount)

        },
        removeFromCart : (state, action) => {
            const productId = action.payload
            state.productsInCart = state.productsInCart.filter(product => product.id !== productId)

            const newTotalQuantity = updateTotalQuantity(state.productsInCart)
            state.totalQuantity = newTotalQuantity
            localStorage.setItem("totalQuantity", newTotalQuantity)

            const newTotalAmount = updateTotalAmount(state.productsInCart)
            state.totalAmount = newTotalAmount
            localStorage.setItem("totalAmount", newTotalAmount)

        },
        countAmount: (state) => {
            const newTotalAmount = updateTotalAmount(state.productsInCart)
            state.totalAmount = newTotalAmount
            localStorage.setItem("totalAmount", newTotalAmount)
        },

        incrementQuantity: (state, action) => {
            const productId = action.payload
            state.productsInCart = updateProductQuantity(state.productsInCart, productId, 'increment')

            const newTotalQuantity = updateTotalQuantity(state.productsInCart)
            state.totalQuantity = newTotalQuantity
            localStorage.setItem("totalQuantity", newTotalQuantity)

            const newTotalAmount = updateTotalAmount(state.productsInCart)
            state.totalAmount = newTotalAmount
            localStorage.setItem("totalAmount", newTotalAmount)

        },
        decrementQuantity: (state, action) => {
            const productId = action.payload
            const productToUpdate = state.productsInCart.find(product => product.id === productId)

            if (productToUpdate.quantity === 1) {
                state.productsInCart = state.productsInCart.filter(product => product.id !== productId);
            } else {
                state.productsInCart = updateProductQuantity(state.productsInCart, productId, 'decrement');
            }

            const newTotalQuantity = updateTotalQuantity(state.productsInCart)
            state.totalQuantity = newTotalQuantity
            localStorage.setItem("totalQuantity", newTotalQuantity)

            const newTotalAmount = updateTotalAmount(state.productsInCart)
            state.totalAmount = newTotalAmount
            localStorage.setItem("totalAmount", newTotalAmount)
        },

    }
})

export const {setProducts, addToCart, countAmount, incrementQuantity, decrementQuantity, removeFromCart } = productsSlice.actions

export default productsSlice.reducer



