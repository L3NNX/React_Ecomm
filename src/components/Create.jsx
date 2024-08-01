import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

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
        console.log(products)
        setProducts([...products, product])
        localStorage.setItem(
            "product",
            JSON.stringify([...products, product])
        );
        toast.success("Product added successfully")
        navigate("/");
    }

    return (
        <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen" >
            <h1 className="mb-5 w-1/2 text-3x1">Add New Product</h1>
            <input
                type="url"
                placeholder="image link"
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setimage(e.target.value)}
                value={image}
            />
            <input
                type="text"
                placeholder="title"
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => settitle(e.target.value)}
                value={title}
            />

            <div className="w-1/2 flex justify-between">
                <input
                    type="text"
                    placeholder="category"
                    className="text-1x1 bg-zinc-100 rounded p-3 w-[48%] mb-3"
                    onChange={(e) => setcategory(e.target.value)}
                    value={category}
                />

                <input
                    type="number"
                    placeholder="price"
                    className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
                    onChange={(e) => setprice(e.target.value)}
                    value={price}
                />
            </div>


            <textarea
                onChange={e => setdescription(e.target.value)}
                placeholder="enter product description"
                value={description}
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                rows="10"
            ></textarea>

            <div className="w-1/2 ">
                <button
                    className="py-2 px-5 border rounded border-blue-200  text-blue-200"
                    href="/create">
                    Add New Product
                </button>
            </div>

        </form>
    );
};

export default Create;