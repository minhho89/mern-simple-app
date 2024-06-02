import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <div className="card-header">{product.title}</div>
            <div className="card-body">
                <p>Price: ${product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
