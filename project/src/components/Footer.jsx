import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex bg-slate-100 p-4 text-slate-800 mt-8">
            <div className="flex gap-8">

                <div className="flex  flex-col gap-2">
                    <div className="text-2xl font-bold">Lorem ipsum</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="font-bold">Contacts</div>
                    <div className="flex gap-2 items-center">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>27 High St, Cardiff, CF10 1PU, United Kingdom</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <i className="fas fa-phone-square"></i>
                        <div>029 2064 5110</div>
                    </div>
                </div>
            </div>


            <div className="flex grow gap-2 justify-around">

                <div className="flex flex-col gap-2">
                    <div className="font-bold">Follow us</div>
                    <div className="flex gap-3">
                        <div>
                            <a href="https://facebook.com/" target="_blank">
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://instagram.com/" target="_blank">
                                <i className="fab fa-instagram-square text-xl"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://pinterest.com/" target="_blank">
                                <i className="fab fa-pinterest text-xl"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://youtube.com/" target="_blank">
                                <i className="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>


                </div>


                <div className="flex flex-col gap-2">
                    <div className="font-bold">Explore</div>
                    <div className="flex flex-col">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                        <Link to="/cart" className="hover:underline">My cart</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
