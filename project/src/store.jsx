import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice.jsx";
import { persistStore } from 'redux-persist';
import persistConfig from './persistConfig.jsx'
import storage from 'redux-persist/lib/storage'


export default configureStore({
    reducer: {
        products: productsReducer,
    }
})
