import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import ImageSlider from "../components/ImageSlider.jsx";
import Navbar from "../components/Navbar.jsx";

const SingleProductPage = () => {
    const {id} = useParams()
    const products = useSelector((state) => state.products.productsData)
    const singleProduct = products.find(product => product.id.toString() === id)
    const singleProductImages = singleProduct ? singleProduct.images : []

    return (
        <div>
            <Navbar/>
            <div className={"flex p-4"}>
                <div>single product page {id}</div>
                <div>
                    <img src={singleProduct.thumbnail} alt=""/>
                </div>
                <div>
                    {
                        singleProductImages.length > 0 ?

                            <ImageSlider
                                singleProductImages={singleProductImages}
                            />
                            :
                            <div>No image available</div>
                    }
                </div>
        </div>



        </div>
    );
};

export default SingleProductPage;
