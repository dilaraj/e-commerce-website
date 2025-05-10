import React from "react";
import './ProductPage.css';
import ProductListData from "../components/ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import ProductImageCarousel from "../components/ProductPageComponents/ProductImageCarouselComponent/ProductImageCarousel";

const ProductPage = () => {
    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    return (
        <div className="productPageContainer">
            <Header />
            <div className="productDescriptionPage container">
                <div className="productImg">
                    <ProductImageCarousel images={product.images}/>
                </div>
                <div className="checkoutDiv">
                    checkout
                </div>
                <div className="descriptionDiv">
                    description
                </div>
                <div className="similarProductDiv">
                    Similar product
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;