import {createSlice} from "@reduxjs/toolkit";

const calculateTotalQuantity = (productsArray) => {
    let totalQuantity = 0
    for (let i = 0; i < productsArray.length; i++) {
        totalQuantity += productsArray[i].quantity
    }
    return totalQuantity
}
const updateTotalAmount = (productsInCart) => {
    return productsInCart.reduce((total, product) => {
        return total + product.quantity * product.price;
    }, 0)
}

const cart = JSON.parse(localStorage.getItem('cart'))
export const productsSlice = createSlice({
    name: "products",
    initialState: {
        cart: cart ? cart : [],
        totalQuantity: 0,
    },
    reducers: {
        setProducts: (state, action) => {
            state.productsData = action.payload
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
        },
        removeSameIdProductsFromCart: (state, action) => {
            const productId = action.payload
            state.cart = state.cart.filter(product => product.id !== productId)
            state.totalQuantity = calculateTotalQuantity(state.cart)
        },

    }
})

export const {
    setProducts,
    addToCart,
    removeProductFromCart,
    removeSameIdProductsFromCart,
} = productsSlice.actions

export default productsSlice.reducer



