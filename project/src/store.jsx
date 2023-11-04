import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice.jsx";

export default configureStore({
    reducer: {
        products: productsReducer,
    }
})
