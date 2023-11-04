import React from 'react';

const ImageCard = ({image}) => {

    return (
            <div className="custom-shadow w-28 h-28 p-2">
                <img className="w-full h-full object-cover" src={image} alt=""/>
            </div>
    );
};

export default ImageCard;
