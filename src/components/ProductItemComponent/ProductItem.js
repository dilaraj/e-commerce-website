import React from "react";
import './ProductItem.css';

const ProductItem = ( {src, brand, name, price }) => {
    return (
        <div className="productItem">
            <img src={src} alt="product item" />
            <div className="productDescription">
                <span className="productBrand">{brand}</span>
                <span className="productName">{name}</span>
                <span className="productPrice">{price}</span>
            </div>
        </div>
    );
}

export default ProductItem;