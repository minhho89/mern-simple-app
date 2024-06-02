import React from "react";
import "./Card.css";

const InputCard = () => {
    return (
        <div className="card">
            <div className="card-header">Add a new product</div>
            <form className="card-body">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Title" />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="Price" />
                <button type="submit">Add Product</button>
            </form>
        </div>

    );
}

export default InputCard;
