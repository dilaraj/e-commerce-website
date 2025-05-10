import React from "react";
import './SimilarProduct.css';
import { useParams } from "react-router-dom";
import ProductListData from "../../ProductListComponent/ProductListData";
import { Link } from "react-router-dom";

const SimilarProduct = () => {

    const { id } = useParams();
    const firstProduct = ProductListData.find(p => p.id.toString() === '1');
    const currentId = parseInt(id, 10);
    const nextProduct = ProductListData.find(p => p.id === currentId + 1);

    if (!nextProduct) {
        return <div>
            <Link to={`/product/${firstProduct.id}`} key={firstProduct.id} style={{ textDecoration: 'none' }}>
                    <img src={firstProduct.src} alt={firstProduct.name} />
            </Link>
        </div>
    }

    return (
        <div className="similarProductContainer">
            <div>
                <Link to={`/product/${nextProduct.id}`} key={nextProduct.id} style={{ textDecoration: 'none' }}>
                    <img src={nextProduct.src} alt={nextProduct.name} />
                </Link>
            </div>
        </div>
    );
}

export default SimilarProduct;