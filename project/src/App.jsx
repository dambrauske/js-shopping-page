import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import MyCart from "./pages/MyCart.jsx";
import ProductCard from "./components/ProductCard.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./features/productsSlice.jsx";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>
                dispatch(setProducts(data.products)))
    }, [])

    const products = useSelector((state) => state.products.productsInCart)
    const total = useSelector((state) => state.products.totalAmount)
    console.log("products" ,products)
    console.log("amount" ,total)



    return (
        <>
            <div>
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
