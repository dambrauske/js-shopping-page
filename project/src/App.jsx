import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MyCart from "./pages/MyCart.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./features/productsSlice.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import Register from "./pages/Register.jsx";
import {setCurrentUser} from "./features/userSlice.jsx";
import Login from "./pages/Login.jsx";

function App() {


    return (
        <>
            <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/cart" element={<MyCart/>}/>
                        <Route path="/product/:id" element={<SingleProductPage/>}/>
                    </Routes>
            </div>
        </>
    )
}

export default App
