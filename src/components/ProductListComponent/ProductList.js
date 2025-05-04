import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItemComponent/ProductItem";
import ProductListData from "./ProductListData";

const ProductList = () => {
    return (
        <div className="productListContainer">
            <div className="productListHeader">Explore our latest drops</div>

            <div className="productList">
                {ProductListData.map (product => (
                    <ProductItem 
                        key={product.src}
                        src={product.src}
                        brand={product.brand}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;