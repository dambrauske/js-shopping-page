import React, {useState} from 'react';

const ImageSlider = ({singleProductImages}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const nextImage = (images, currentIndex, setIndex) => {
        setIndex(currentImageIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    const previousImage = (images, currentIndex, setIndex) => {
        setIndex(currentImageIndex === images.length - 1 ? 0 : currentIndex + 1)
    }


    return (
        <div>
            <div>
                <img className="w-20" src={singleProductImages[currentImageIndex]} alt=""/>
            </div>
            <div className="flex gap-2">

            </div>

        </div>
    );
};

export default ImageSlider;
