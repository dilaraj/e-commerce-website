import React, { useState } from "react";
import './ProductImageCarousel.css';
import ProductListData from "../../ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


const ProductImageCarousel = ({ images }) => {

    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    const [index, setIndex] = useState(0);
    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="carouselContainer">
            <div className="carouselItemImg">
                <img src={product.images[index]} alt={`Product ${index + 1}`} className="carouselItem"/>
            </div>
            <div className="carouselBtns">
                <button onClick={prev}><SlArrowLeft/></button>
                <div className="carouselDots">
                    {images.map((_, i) => (
                        <span 
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        ></span>
                    ))}
                </div>
                <button onClick={next}><SlArrowRight/></button>
            </div>
        </div>
    );
}

export default ProductImageCarousel;