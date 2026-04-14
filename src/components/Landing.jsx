import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { ShoppingCart, Menu, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';

function Landing() {
    const { products } = useContext(ProductContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const featuredProducts = products ? products.slice(0, 8) : [];
    const topProducts = products ? products.slice(0, 3) : [];

    return (
        <div className="w-full h-full bg-white flex flex-col overflow-y-auto">
            <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                    <h1 className="font-serif text-2xl text-gray-900">Store</h1>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Shop
                        </Link>
                        <Link to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
                            <ShoppingCart size={20} />
                            Cart
                        </Link>
                    </nav>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={24} className="text-gray-900" />
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 px-4 py-4 space-y-4">
                        <Link
                            to="/products"
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            to="/cart"
                            className="block text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <ShoppingCart size={20} />
                            Cart
                        </Link>
                    </div>
                )}
            </header>

            <main className="flex-1 flex flex-col">
                <section className="px-4 md:px-8 py-20 md:py-40 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                    <div className="max-w-4xl w-full text-center">
                        <h2 className="font-serif text-6xl md:text-8xl text-gray-900 mb-6 leading-tight">
                            Discover what's next
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                            Carefully curated products for the modern lifestyle. Quality, style, and value in every item.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <Link
                                to="/products"
                                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
                            >
                                Start Shopping
                            </Link>
                            <a
                                href="#featured"
                                className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium text-lg"
                            >
                                See Collections
                            </a>
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-8 py-16 md:py-24 bg-white border-t border-b border-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <Truck className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="font-serif text-lg text-gray-900 mb-2">Free Shipping</h3>
                                <p className="text-gray-600 text-sm">On orders over $50</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <RotateCcw className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="font-serif text-lg text-gray-900 mb-2">Easy Returns</h3>
                                <p className="text-gray-600 text-sm">30-day return policy</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <Shield className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="font-serif text-lg text-gray-900 mb-2">Secure Checkout</h3>
                                <p className="text-gray-600 text-sm">100% secure transactions</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <Star className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="font-serif text-lg text-gray-900 mb-2">Quality Assured</h3>
                                <p className="text-gray-600 text-sm">Premium products only</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-8 py-20 md:py-32 bg-gray-50" id="featured">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Best Sellers</h3>
                            <p className="text-gray-600 text-lg">Hand-picked products loved by our customers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {topProducts.map((p, idx) => (
                                <Link
                                    key={p.id}
                                    to={`/details/${p.id}`}
                                    className="group"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden bg-white rounded-xl mb-6 border border-gray-200">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                                                #{idx + 1}
                                            </span>
                                        </div>
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="text-gray-900 font-medium text-lg line-clamp-2 group-hover:text-gray-600 transition-colors mb-3">
                                        {p.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4 capitalize">{p.category}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-900 font-semibold text-2xl">
                                            ${p.price}
                                        </p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ShoppingCart size={20} className="text-gray-900" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-8 py-20 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Featured Collection</h3>
                            <p className="text-gray-600 text-lg">Explore our full range of premium products</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/details/${p.id}`}
                                    className="group"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4 border border-gray-200">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="text-gray-900 font-medium line-clamp-2 group-hover:text-gray-600 transition-colors mb-2 text-sm">
                                        {p.title}
                                    </h4>
                                    <p className="text-gray-900 font-semibold">
                                        ${p.price}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <Link
                                to="/products"
                                className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium text-lg"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-8 py-20 md:py-32 bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="font-serif text-4xl md:text-5xl mb-6">Join Our Newsletter</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Get exclusive offers, new arrivals, and insider tips delivered to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Landing;
