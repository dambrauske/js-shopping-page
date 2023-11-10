import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MyCart from "./pages/MyCart.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {

    return (
        <>
            <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/cart" element={<MyCart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/product/:id" element={<SingleProductPage/>}/>
                    </Routes>
            </div>
        </>
    )
}

export default App
