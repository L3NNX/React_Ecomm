import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from '../utils/Context';

const Edit = () => {

    const navigate = useNavigate();
    const {id } = useParams();
    const { products, setProducts } = useContext(ProductContext);
    const [ product, setProduct ] = useState({
        title:"",
        image:"",
        category:"",
        price:"",
        description:"",
    });
    // const [title, settitle] = useState("");
    // const [image, setimage] = useState("");
    // const [category, setcategory] = useState("");
    // const [price, setprice] = useState("");
    // const [description, setdescription] = useState("");


    const ChangeHandler=(e)=>{
        console.log(e.target.name,e.target.value)
        setProduct({...product, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setProduct(products.filter((p) => p.id==id)[0]);
    },[id]);
    console.log(product);
    const AddProductHandler = (e) => {
        e.preventDefault();

        if (product.title.trim().length === 0) {
            alert("No field must be empty");
            return
        }

        const pi= products.findIndex((p) => p.id==id);

        const copyData= [...products];
        copyData[pi]= {...products[pi],...product};

        // console.log(products)
        setProducts(copyData)
        localStorage.setItem(
            "products",
            JSON.stringify(copyData)
        )
        navigate("/");
    }
        return (

            <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen" >
                <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
                <input
                    type="url"
                    placeholder="image link"
                    className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                    name="image"
                    onChange={ChangeHandler}
                    value={product && product.image}
                />
                <input
                    type="text"
                    placeholder="title"
                    className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                    name="title"
                    onChange={ChangeHandler}
                    value={product && product.title}
                />

                <div className="w-1/2 flex justify-between">
                    <input
                        type="text"
                        placeholder="category"
                        className="text-1x1 bg-zinc-100 rounded p-3 w-[48%] mb-3"
                        name="category"
                        onChange={ChangeHandler}
                        value={product && product.category}
                    />

                    <input
                        type="number"
                        placeholder="price"
                        className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
                        name="price"
                        onChange={ChangeHandler}
                        value={product && product.price}
                    />
                </div>


                <textarea
                    onChange={ChangeHandler}
                    placeholder="enter product description"
                    name='description'
                    value={product && product.description}
                    className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
                    rows="10"
                ></textarea>

                <div className="w-1/2 ">
                    <button
                        className="py-2 px-5 border rounded border-blue-200  text-blue-200"
                        href="/create">
                        Edit Product
                    </button>
                </div>

            </form>
        )
    }

    export default Edit