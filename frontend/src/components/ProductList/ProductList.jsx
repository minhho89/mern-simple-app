import React, {useEffect, useState} from "react";
import API from "../../services/api";
import ProductCard from "../ProductCard/ProductCard";
import NoProduct from "../NoProductMessage/NoProduct";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await API.getProducts();
                setProducts(data);
            } catch (error) {
                alert(error);
            }
        };
        fetchProducts()
    },[]);

    return (
       <>
           {
               products.length > 0
            ? products.map(product => (
                    <ProductCard product={product}/>
                ))
            : <NoProduct />
           }
        </>
    );
}

export default ProductList;
