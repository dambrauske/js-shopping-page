import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {

    const productsInCart = useSelector((state) => state.products.productsInCart)

    return (
        <nav className="bg-gradient-to-r from-teal-200 to-lime-200">
            <div className={"container mx-auto flex py-5 items-center justify-between "}>
                <div className={"flex gap-10"}>
                    <div className={"cursor-pointer hover:text-yellow-500 ease-out duration-300"}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={"cursor-pointer hover:text-yellow-500 ease-out duration-300"}>
                        <Link to="/about">About</Link>
                    </div>


                </div>
                <div
                    className="bg-yellow-400 px-2 rounded cursor-pointer hover:bg-yellow-500 hover:text-white ease-out duration-300">
                    <Link to="/cart" className={"flex items-center"}>
                        <div className="hidden md:block">My cart</div>
                        <div className={"w-10 h-10 flex justify-center items-center cursor-pointer relative"}>
                            <div
                                className={"absolute top-1 right-1 w-4 h-4 bg-yellow-300 rounded-full flex justify-center items-center text-xs"}>
                                {productsInCart.length}
                            </div>
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
