import React from "react";
import './ProductDescription.css';
import { useParams } from "react-router-dom";
import ProductListData from "../../ProductListComponent/ProductListData";

const ProductDescription = () => {

    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    return (
        <div className="productDescriptionSection">
            <div>Description</div>
            <div className="line"></div>
            <div className="productDescriptionSubtext">
                {product.description}
            </div>
            <div className="productDescriptionList">
                <ul>
                    {product.descriptionList.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductDescription;