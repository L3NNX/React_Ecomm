import React, { createContext, useEffect, useState } from 'react';
import axios from "./Axios";

export const ProductContext = createContext();

const Context = (props) => {
    // Initialize products as an empty array instead of null
    // const [products, setProducts] = useState(() => {
    //     const savedProducts = localStorage.getItem('products');
    //     return savedProducts ? JSON.parse(savedProducts) : [];
    // });
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getProducts = async () => {
        try {
            const { data } = await axios("/products");
            console.log(data); // Debugging log
            setProducts(data);
            localStorage.setItem('products', JSON.stringify(data)); // Store fetched products in localStorage
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        // Fetch products only if local storage is empty
        if (products.length === 0) {
            getProducts();
        }
    }, [products]);

    useEffect(() => {
        // Update local storage whenever products change
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
