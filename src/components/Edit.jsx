import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from '../utils/Context';
import { ArrowLeft } from 'lucide-react';

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { products, setProducts } = useContext(ProductContext);
    const [product, setProduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: "",
    });

    const ChangeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setProduct(products.filter((p) => p.id == id)[0]);
    }, [id]);

    const AddProductHandler = (e) => {
        e.preventDefault();

        if (product.title.trim().length === 0) {
            alert("No field must be empty");
            return
        }

        const pi = products.findIndex((p) => p.id == id);

        const copyData = [...products];
        copyData[pi] = { ...products[pi], ...product };

        setProducts(copyData)
        localStorage.setItem(
            "products",
            JSON.stringify(copyData)
        )
        navigate("/");
    }

    return (
        <div className="w-full md:w-full min-h-screen bg-botanical-bg">
            <div className="max-w-2xl mx-auto px-4 md:px-8 py-8 md:py-16">
                <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center gap-2 text-botanical-primary hover:text-botanical-accent transition-colors duration-300 mb-8 md:mb-12 font-medium"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>

                <div className="mb-12">
                    <h1 className="font-serif text-5xl md:text-6xl text-botanical-fg mb-2">
                        Edit <span className="italic text-botanical-accent">Product</span>
                    </h1>
                    <p className="text-botanical-fg text-opacity-60">Update your product details</p>
                </div>

                <form onSubmit={AddProductHandler} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Product Image URL</label>
                        <input
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className="botanical-input-light w-full text-base"
                            name="image"
                            onChange={ChangeHandler}
                            value={product && product.image}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Product Title</label>
                        <input
                            type="text"
                            placeholder="Enter product title"
                            className="botanical-input-light w-full text-base"
                            name="title"
                            onChange={ChangeHandler}
                            value={product && product.title}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-botanical-fg mb-3">Category</label>
                            <input
                                type="text"
                                placeholder="e.g., Electronics"
                                className="botanical-input-light w-full text-base"
                                name="category"
                                onChange={ChangeHandler}
                                value={product && product.category}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-botanical-fg mb-3">Price</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="botanical-input-light w-full text-base"
                                name="price"
                                onChange={ChangeHandler}
                                value={product && product.price}
                                step="0.01"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Description</label>
                        <textarea
                            onChange={ChangeHandler}
                            placeholder="Write a detailed description of your product..."
                            name="description"
                            value={product && product.description}
                            className="botanical-input-light w-full text-base font-sans resize-none"
                            rows="6"
                        />
                    </div>

                    <div className="flex gap-4 pt-6">
                        <button
                            type="submit"
                            className="botanical-button-primary flex-1 h-12"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="botanical-button-secondary flex-1 h-12"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit