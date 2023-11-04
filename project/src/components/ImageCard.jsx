import React from 'react';

const ImageCard = ({image, setMainImage}) => {

    return (
            <div
                onClick={() => setMainImage(image)}
                className="custom-shadow w-28 h-28 p-2">
                <img className="w-full h-full object-cover" src={image} alt=""/>
            </div>
    );
};

export default ImageCard;
