import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="bg-gradient-to-r from-teal-200 to-lime-200">
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
                    className="bg-yellow-400 px-4 py-2 rounded cursor-pointer hover:bg-yellow-500 hover:text-white ease-out duration-300">
                    <Link to="/cart" className={"flex gap-2 items-center"}>
                        <div className="hidden md:block">My cart</div>
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
