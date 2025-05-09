import React, { useRef } from "react";
import './ProductList.css';
import ProductItem from "../ProductItemComponent/ProductItem";
import ProductListData from "./ProductListData";
import { Link } from 'react-router-dom';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ProductList = () => {
    const scrollRef = useRef(null);

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -140,
                behavior: 'smooth'
            });
        }
    }

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy ({
                left: 140,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="productListContainer">
            <div className="productListHeader">Explore our latest drops</div>

            <div className="productList" ref={scrollRef}>
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

            <div className="btns">
                <button className="btn-prev" onClick={handlePrev}>
                    <SlArrowLeft />
                </button>
                <button className="btn-next" onClick={handleNext}>
                    <SlArrowRight />
                </button>
            </div>
        </div>
    );
}

export default ProductList;