import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../features/productsSlice.jsx";

const Navbar = () => {

    const totalQuantity = useSelector(state => state.products.totalQuantity)
    const dispatch = useDispatch()

    const resetProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>
                dispatch(setProducts(data.products)))
    }

    return (
        <nav className="bg-gradient-to-r from-green-300 to-blue-400">
            <div className="container mx-auto flex py-2 items-center justify-between ">
                <div className="flex gap-10">
                    <div className="cursor-pointer hover:text-yellow-500 ease-out duration-300">
                        <Link to="/"
                        onClick={resetProducts}
                        >Home</Link>
                    </div>
                    <div className="cursor-pointer hover:text-yellow-500 ease-out duration-300">
                        <Link to="/about">About</Link>
                    </div>

                </div>
                <div className="flex gap-10 items-center">
                    <div
                        className="bg-yellow-400 px-2 rounded cursor-pointer hover:bg-yellow-500 hover:text-white ease-out duration-200">
                        <Link to="/cart" className="flex items-center">
                            <div className="hidden md:block">My cart</div>
                            <div className=" p-2 flex justify-center items-center cursor-pointer relative">
                                {
                                    totalQuantity > 0 ?
                                        <div
                                            className="absolute top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full flex justify-center items-center text-xs">
                                            {totalQuantity}
                                        </div>
                                        :
                                        null
                                }
                                <div>
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
