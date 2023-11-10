import React from 'react';

const ProductInCheckout = ({product}) => {

    return (
        <div className="p-4 bg-slate-50 rounded flex gap-4">
            <div className="w-10 h-10">
                <img className="w-full h-full object-cover" src={product.thumbnail} alt=""/>
            </div>
            <div>
                <div className="text-sm font-bold">{product.title}</div>
                <div className="text-xs">Quantity: {product.quantity}</div>
                <div className="text-xs">Price: {product.price * product.quantity} €</div>
            </div>
        </div>
    );
};

export default ProductInCheckout;
