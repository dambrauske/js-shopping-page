import React, {useState} from 'react';
import ImageCard from "./ImageCard.jsx";

const ProductPageImages = ({singleProductImages, singleProductThumbnail}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [mainImage, setMainImage] = useState(singleProductThumbnail ? singleProductThumbnail : undefined)

    const nextImage = (images, currentIndex, setIndex) => {
        setIndex(currentImageIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    const previousImage = (images, currentIndex, setIndex) => {
        setIndex(currentImageIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    return (

        <div className="flex flex-col gap-2 items-center">
            <div className="w-96 h-96">
                <img className="w-full h-full object-contain" src={mainImage} alt="product image"/>
            </div>
            <div className="flex gap-2 justify-center">

                {singleProductImages && singleProductImages.map((img, i) => (
                    <ImageCard
                        key={i}
                        image={img}
                        setMainImage={setMainImage}
                    />
                ))

                }
            </div>
        </div>
    );
};

export default ProductPageImages;
