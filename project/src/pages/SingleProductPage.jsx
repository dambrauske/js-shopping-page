import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import ProductPageImages from "../components/ProductPageImages.jsx";
import ProductPageDescription from "../components/ProductPageDescription.jsx";
import Footer from "../components/Footer.jsx";

const SingleProductPage = () => {
    const {id} = useParams()
    const products = useSelector((state) => state.products.products)
    const singleProduct = products.find(product => product.id.toString() === id)
    const singleProductImages = singleProduct ? singleProduct.images : []
    const singleProductThumbnail = singleProduct ? singleProduct.thumbnail : undefined

    return (
        <div>
            <Navbar/>
            <div className="flex p-4 gap-4">

                <ProductPageImages
                    singleProductImages={singleProductImages}
                    singleProductThumbnail={singleProductThumbnail}
                />
                <ProductPageDescription
                    singleProduct={singleProduct}
                />
            </div>
        </div>
    );
};

export default SingleProductPage;
