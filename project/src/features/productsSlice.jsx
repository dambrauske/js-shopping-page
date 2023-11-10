import {createSlice} from "@reduxjs/toolkit";

const calculateTotalQuantity = (productsArray) => {
    let totalQuantity = 0
    for (let i = 0; i < productsArray.length; i++) {
        totalQuantity += productsArray[i].quantity
    }
    return totalQuantity
}

const cart = JSON.parse(localStorage.getItem("cart"))
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"))
const products = JSON.parse(sessionStorage.getItem("products"))
export const productsSlice = createSlice({
    name: "products",
    initialState: {
        cart: cart ? cart : [],
        totalQuantity: totalQuantity ? totalQuantity : 0,
        products: products? products : [],
        selectedProduct: undefined,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
            sessionStorage.setItem("products", JSON.stringify(state.products))
        },
        addToCart: (state, action) => {
            const product = action.payload
            const productAlreadyInCart = state.cart.find(p => p.id === product.id)

            if (productAlreadyInCart) {
                state.cart = state.cart.map(p => {
                    if (p.id === product.id) {
                        return {...p, quantity: p.quantity + 1}
                    }
                    return p;
                })
            } else {
                const updatedProduct = {...product, quantity: 1}
                state.cart.push(updatedProduct)
            }

            state.totalQuantity = calculateTotalQuantity(state.cart)
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity ))
            localStorage.setItem("cart", JSON.stringify(state.cart))

        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload
            state.cart = state.cart.map(p => {
                if (p.id === productId && p.quantity >= 1) {
                    return { ...p, quantity: p.quantity - 1 }
                }
                return p
            }).filter(p => p.quantity > 0)

            state.totalQuantity = calculateTotalQuantity(state.cart)
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity ))
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeSameIdProductsFromCart: (state, action) => {
            const productId = action.payload
            state.cart = state.cart.filter(product => product.id !== productId)
            state.totalQuantity = calculateTotalQuantity(state.cart)
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity ))
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        clearShoppingDetails: (state) => {
            state.cart = []
            state.totalQuantity = 0
            state.products = []
        }
    }
})

export const {
    setProducts,
    addToCart,
    removeProductFromCart,
    removeSameIdProductsFromCart,
    clearShoppingDetails,
} = productsSlice.actions

export default productsSlice.reducer



