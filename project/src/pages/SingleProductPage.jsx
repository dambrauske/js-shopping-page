import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import ProductPageImages from "../components/ProductPageImages.jsx";
import ProductPageDescription from "../components/ProductPageDescription.jsx";

const SingleProductPage = () => {
    const {id} = useParams()
    const products = useSelector((state) => state.products.productsData)
    const singleProduct = products.find(product => product.id.toString() === id)
    const singleProductImages = singleProduct ? singleProduct.images : []
    const singleProductThumbnail = singleProduct ? singleProduct.thumbnail : undefined

    return (
        <div>
            <Navbar/>
            <div className="flex p-4 gap-2">

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
