import React from "react";
import './ProductPage.css';
import ProductListData from "../components/ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import ProductImageCarousel from "../components/ProductPageComponents/ProductImageCarouselComponent/ProductImageCarousel";
import AddToCart from "../components/ProductPageComponents/AddToCartComponent/AddToCart";
import ProductDescription from "../components/ProductPageComponents/ProductDescriptionComponent/ProductDescription";
import SimilarProduct from "../components/ProductPageComponents/SimilarProductComponent/SimilarProduct";

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
                    <AddToCart />
                </div>
                <div className="descriptionDiv">
                    <ProductDescription />
                </div>
                <div className="similarProductDiv">
                    <SimilarProduct />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;