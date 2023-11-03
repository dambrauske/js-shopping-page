import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice.jsx";
import userReducer from "./features/userSlice.jsx";



export default configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
    }
})
