import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
import { CartContext } from '../utils/CartContext';
import { ArrowLeft, Edit3, Trash2, ShoppingCart, Star, Shield, Truck } from 'lucide-react';
import Nav from './Nav';

const Details = () => {
    const navigate = useNavigate();
    const { products, setProducts } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!product) {
            setProduct(products.filter((p) => p.id == id)[0]);
        }
    }, [products]);

    const ProductDeleteHandler = (id) => {
        const FilteredProduct = products.filter((p) => p.id !== id);
        setProducts(FilteredProduct);
        localStorage.setItem('products', JSON.stringify(FilteredProduct));
        navigate("/products");
    };

    return product ? (
       <div className="flex h-screen"> {/* ✅ Added flex container */}
            <Nav products={products} />
 <div className="w-full md:w-[85%] min-h-screen bg-botanical-bg overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/products")}
                    className="inline-flex items-center gap-2 text-botanical-fg hover:text-botanical-accent transition-colors duration-300 mb-8 md:mb-12 font-medium group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Products
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Product Image */}
                    <div className="sticky top-8">
                        <div className="botanical-card overflow-hidden">
                            <div className="relative aspect-square bg-botanical-secondary bg-opacity-20 p-8 md:p-12">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="text-center p-4 rounded-2xl bg-botanical-secondary bg-opacity-20">
                                <Shield size={24} className="text-botanical-primary mx-auto mb-2" />
                                <p className="text-xs text-botanical-fg text-opacity-70">Secure</p>
                            </div>
                            <div className="text-center p-4 rounded-2xl bg-botanical-secondary bg-opacity-20">
                                <Truck size={24} className="text-botanical-primary mx-auto mb-2" />
                                <p className="text-xs text-botanical-fg text-opacity-70">Free Ship</p>
                            </div>
                            <div className="text-center p-4 rounded-2xl bg-botanical-secondary bg-opacity-20">
                                <Star size={24} className="text-botanical-primary mx-auto mb-2" />
                                <p className="text-xs text-botanical-fg text-opacity-70">Quality</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-start pt-0 md:pt-4">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 bg-botanical-primary bg-opacity-10 rounded-full px-4 py-2 mb-6 w-fit">
                            <span className="text-sm text-botanical-primary font-medium uppercase tracking-wider capitalize">
                                {product.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-serif text-4xl md:text-6xl text-botanical-fg mb-6 leading-tight">
                            {product.title}
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-botanical-border">
                            <span className="font-serif text-5xl md:text-6xl text-botanical-accent">
                                ${product.price}
                            </span>
                            <span className="text-botanical-fg text-opacity-50 line-through text-xl">
                                ${(product.price * 1.2).toFixed(2)}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="font-serif text-xl text-botanical-fg mb-4">
                                About this product
                            </h3>
                            <p className="text-botanical-fg text-opacity-70 leading-relaxed text-lg">
                                {product.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4 mb-8">
                            <button
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                                className="botanical-button-accent flex items-center justify-center gap-3 py-4 text-base shadow-botanical-md hover:shadow-botanical-lg"
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    to={`/edit/${product.id}`}
                                    className="botanical-button-secondary flex items-center justify-center gap-2 py-3"
                                >
                                    <Edit3 size={18} />
                                    Edit
                                </Link>
                                <button
                                    onClick={() => ProductDeleteHandler(product.id)}
                                    className="border-2 border-red-400 text-red-600 rounded-full px-6 py-3 font-medium hover:bg-red-50 hover:border-red-500 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Trash2 size={18} />
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Product Features */}
                        <div className="botanical-card-secondary p-6 space-y-4">
                            <h4 className="font-serif text-lg text-botanical-fg mb-4">
                                Why you'll love it
                            </h4>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-botanical-accent mt-2"></div>
                                <p className="text-botanical-fg text-opacity-70">Premium quality materials</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-botanical-accent mt-2"></div>
                                <p className="text-botanical-fg text-opacity-70">Sustainably sourced</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-botanical-accent mt-2"></div>
                                <p className="text-botanical-fg text-opacity-70">30-day return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ) : <Loading />;
}

export default Details;