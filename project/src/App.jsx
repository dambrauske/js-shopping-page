import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import MyCart from "./pages/MyCart.jsx";
import ProductCard from "./components/ProductCard.jsx";
import {createContext} from "react";

function App() {


    return (
        <>
            <div className={"bg-slate-100"}>
                <Navbar/>
                <div className={"bg-slate-100 container mx-auto"}>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/cart" element={<MyCart/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
