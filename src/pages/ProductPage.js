import React from "react";
import './ProductPage.css';
import ProductListData from "../components/ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";

const ProductPage = () => {
    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    return (
        <div className="productPageContainer">
            <Header />
            <div className="productName">
                <img src={product.src} alt={product.name} className="productImg" />
            </div>
        </div>
    );
}

export default ProductPage;