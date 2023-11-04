import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import UserDropdown from "./UserDropdown.jsx";
import {setProducts} from "../features/productsSlice.jsx";
import {setCurrentUser} from "../features/userSlice.jsx";

const Navbar = () => {

    const currentUser = useSelector(state => state.user.currentUser)
    const cart = useSelector(state => state.products.cart)
    const totalQuantity = useSelector(state => state.products.totalQuantity)
    const products = useSelector(state => state.products.products)
    const [showUserDropdown, setShowUserDropdown] = useState(false)

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown)
    }

    console.log('currentUser', currentUser)
    console.log('cart', cart)

    return (
        <nav className="bg-gradient-to-r from-green-200 via-green-300 to-blue-400">
            <div className="container mx-auto flex py-2 items-center justify-between ">
                <div className="flex gap-10">
                    <div className="cursor-pointer hover:text-yellow-500 ease-out duration-300">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="cursor-pointer hover:text-yellow-500 ease-out duration-300">
                        <Link to="/about">About</Link>
                    </div>

                </div>
                <div className="flex gap-10 items-center">

                    <div
                        onClick={toggleUserDropdown}
                        className="flex justify-center items-center gap-2 cursor-pointer hover:text-white ease-out duration-200 relative">
                        <div className="hidden md:block">User</div>
                        <i className="fas fa-chevron-down"></i>
                        {
                            showUserDropdown && <UserDropdown
                                toggleUserDropdown={toggleUserDropdown}
                            />
                        }
                    </div>
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
