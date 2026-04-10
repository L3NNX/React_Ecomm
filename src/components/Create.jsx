import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';

const Create = () => {
    const navigate = useNavigate();
    const { products, setProducts } = useContext(ProductContext);
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const AddProductHandler = (e) => {
        e.preventDefault();

        if (title.trim().length === 0) {
            alert("No field must be empty");
            return
        }
        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setProducts([...products, product])
        localStorage.setItem(
            "products",
            JSON.stringify([...products, product])
        );
        toast.success("Product added successfully")
        navigate("/");
    }

    return (
        <div className="w-full md:w-[85%] min-h-screen bg-botanical-bg overflow-y-auto">
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
                        Create <span className="italic text-botanical-accent">Product</span>
                    </h1>
                    <p className="text-botanical-fg text-opacity-60">Add a new item to your collection</p>
                </div>

                <form onSubmit={AddProductHandler} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Product Image URL</label>
                        <input
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className="botanical-input-light w-full text-base"
                            onChange={(e) => setimage(e.target.value)}
                            value={image}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Product Title</label>
                        <input
                            type="text"
                            placeholder="Enter product title"
                            className="botanical-input-light w-full text-base"
                            onChange={(e) => settitle(e.target.value)}
                            value={title}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-botanical-fg mb-3">Category</label>
                            <input
                                type="text"
                                placeholder="e.g., Electronics"
                                className="botanical-input-light w-full text-base"
                                onChange={(e) => setcategory(e.target.value)}
                                value={category}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-botanical-fg mb-3">Price</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="botanical-input-light w-full text-base"
                                onChange={(e) => setprice(e.target.value)}
                                value={price}
                                step="0.01"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-botanical-fg mb-3">Description</label>
                        <textarea
                            onChange={e => setdescription(e.target.value)}
                            placeholder="Write a detailed description of your product..."
                            value={description}
                            className="botanical-input-light w-full text-base font-sans resize-none"
                            rows="6"
                        />
                    </div>

                    <div className="flex gap-4 pt-6">
                        <button
                            type="submit"
                            className="botanical-button-primary flex-1 h-12"
                        >
                            Create Product
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
    );
};

export default Create;