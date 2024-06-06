import React, {useState} from "react";
import "./Card.css";
import API from "../../services/api";

const InputCard = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await API.saveProduct({title, price});
            setTitle('');
            setPrice('');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="card">
            <div className="card-header">Add a new product</div>
            <form className="card-body" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </div>

    );
}

export default InputCard;
