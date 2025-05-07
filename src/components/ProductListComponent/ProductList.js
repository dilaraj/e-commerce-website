import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItemComponent/ProductItem";
import ProductListData from "./ProductListData";
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="productListContainer">
            <div className="productListHeader">Explore our latest drops</div>

            <div className="productList">
                {ProductListData.map (product => (
                    <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                        <ProductItem 
                        src={product.src}
                        brand={product.brand}
                        name={product.name}
                        price={product.price}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductList;