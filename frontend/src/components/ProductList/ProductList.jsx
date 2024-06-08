import React, {useEffect, useState} from "react";
import socketIOClient from "socket.io-client";
import API from "../../services/api";
import ProductCard from "../ProductCard/ProductCard";
import NoProduct from "../NoProductMessage/NoProduct";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = socketIOClient('http://localhost:5002');
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);

    useEffect(() => {
        if (!socket) return;

        const fetchProducts = async () => {
            try {
                const data = await API.getProducts();
                setProducts(data);
            } catch (error) {
                alert(error);
            }
        };
        fetchProducts();

        socket.on('new-product', (newProduct) => {
           setProducts((prevProducts) => [...prevProducts, newProduct]) ;
        });

        return () => {
            if (socket) {
                socket.off('new-product');
            }
        };
    },[socket]);

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
