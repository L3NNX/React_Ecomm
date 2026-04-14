import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { ShoppingCart, Menu, Truck, RotateCcw, Shield, Leaf, Sparkles, Heart } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';

function Landing() {
    const { products } = useContext(ProductContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const featuredProducts = products ? products.slice(0, 8) : [];
    const topProducts = products ? products.slice(0, 3) : [];

    return (
        <div className="w-full min-h-screen bg-botanical-bg flex flex-col">
            {/* Header - Botanical Style */}
            <header className="sticky top-0 z-40 border-b border-botanical-border bg-botanical-bg backdrop-blur-sm bg-opacity-95">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
                    <Link to="/" className="font-serif text-3xl text-botanical-fg flex items-center gap-3">
    <img src="/botanica-logo.svg" alt="Botanica" className="w-10 h-10" />
    Botanica
</Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link 
                            to="/products" 
                            className="text-botanical-fg hover:text-botanical-accent transition-colors duration-300 font-medium"
                        >
                            Shop
                        </Link>
                        <Link 
                            to="/cart" 
                            className="botanical-button-secondary flex items-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            Cart
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-botanical-secondary hover:bg-opacity-40 transition-all duration-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={24} className="text-botanical-fg" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-botanical-border px-4 py-6 space-y-4 bg-botanical-bg">
                        <Link
                            to="/products"
                            className="block text-botanical-fg hover:text-botanical-accent transition-colors duration-300 font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            to="/cart"
                            className="botanical-button-secondary w-full flex items-center justify-center gap-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <ShoppingCart size={18} />
                            Cart
                        </Link>
                    </div>
                )}
            </header>

            <main className="flex-1 flex flex-col">
                {/* Hero Section - Botanical Style */}
                <section className="px-4 md:px-8 py-24 md:py-40 bg-gradient-to-b from-botanical-secondary from-opacity-20 to-botanical-bg flex items-center justify-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-64 h-64 bg-botanical-primary opacity-5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-botanical-accent opacity-5 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-5xl w-full text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-botanical-primary bg-opacity-10 text-botanical-primary text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            Curated with care
                        </div>
                        
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-botanical-fg mb-6 leading-tight">
                            Discover Natural
                            <span className="block text-botanical-accent mt-2">Elegance</span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-botanical-fg text-opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Thoughtfully curated products that blend quality, sustainability, and timeless design for the mindful modern lifestyle.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <Link
                                to="/products"
                                className="botanical-button-primary text-base px-10 py-4"
                            >
                                Explore Collection
                            </Link>
                            <a
                                href="#featured"
                                className="botanical-button-secondary text-base px-10 py-4"
                            >
                                See Best Sellers
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section - Botanical Style */}
                <section className="px-4 md:px-8 py-16 md:py-20 bg-white border-y border-botanical-border">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                            <div className="text-center p-6 rounded-3xl hover:bg-botanical-secondary hover:bg-opacity-20 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 rounded-full bg-botanical-primary bg-opacity-10 flex items-center justify-center">
                                        <Truck className="w-7 h-7 text-botanical-primary" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-lg text-botanical-fg mb-2">Free Shipping</h3>
                                <p className="text-botanical-fg text-opacity-60 text-sm">On orders over $50</p>
                            </div>
                            
                            <div className="text-center p-6 rounded-3xl hover:bg-botanical-secondary hover:bg-opacity-20 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 rounded-full bg-botanical-primary bg-opacity-10 flex items-center justify-center">
                                        <RotateCcw className="w-7 h-7 text-botanical-primary" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-lg text-botanical-fg mb-2">Easy Returns</h3>
                                <p className="text-botanical-fg text-opacity-60 text-sm">30-day return policy</p>
                            </div>
                            
                            <div className="text-center p-6 rounded-3xl hover:bg-botanical-secondary hover:bg-opacity-20 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 rounded-full bg-botanical-primary bg-opacity-10 flex items-center justify-center">
                                        <Shield className="w-7 h-7 text-botanical-primary" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-lg text-botanical-fg mb-2">Secure Checkout</h3>
                                <p className="text-botanical-fg text-opacity-60 text-sm">100% secure payments</p>
                            </div>
                            
                            <div className="text-center p-6 rounded-3xl hover:bg-botanical-secondary hover:bg-opacity-20 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 rounded-full bg-botanical-primary bg-opacity-10 flex items-center justify-center">
                                        <Leaf className="w-7 h-7 text-botanical-primary" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-lg text-botanical-fg mb-2">Eco-Friendly</h3>
                                <p className="text-botanical-fg text-opacity-60 text-sm">Sustainable materials</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Sellers Section - Botanical Style */}
                <section className="px-4 md:px-8 py-20 md:py-32 bg-botanical-bg" id="featured">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-botanical-accent bg-opacity-10 text-botanical-accent text-sm font-medium mb-4">
                                <Heart size={16} />
                                Customer Favorites
                            </div>
                            <h3 className="font-serif text-4xl md:text-6xl text-botanical-fg mb-4">
                                Best Sellers
                            </h3>
                            <p className="text-botanical-fg text-opacity-70 text-lg max-w-2xl mx-auto">
                                Hand-picked products loved by our community
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {topProducts.map((p, idx) => (
                                <Link
                                    key={p.id}
                                    to={`/details/${p.id}`}
                                    className="group botanical-card p-6"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden bg-botanical-secondary bg-opacity-20 rounded-2xl mb-6">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="inline-flex items-center justify-center w-10 h-10 bg-botanical-accent text-white text-sm font-bold rounded-full shadow-botanical-md">
                                                #{idx + 1}
                                            </span>
                                        </div>
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <p className="text-botanical-primary text-sm font-medium uppercase tracking-wider">
                                            {p.category}
                                        </p>
                                        <h4 className="text-botanical-fg font-serif text-xl line-clamp-2 group-hover:text-botanical-accent transition-colors duration-300">
                                            {p.title}
                                        </h4>
                                        <div className="flex items-center justify-between pt-2">
                                            <p className="text-botanical-fg font-bold text-2xl">
                                                ${p.price}
                                            </p>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-10 h-10 rounded-full bg-botanical-accent flex items-center justify-center">
                                                    <ShoppingCart size={18} className="text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Collection - Botanical Style */}
                <section className="px-4 md:px-8 py-20 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-serif text-4xl md:text-6xl text-botanical-fg mb-4">
                                Featured Collection
                            </h3>
                            <p className="text-botanical-fg text-opacity-70 text-lg max-w-2xl mx-auto">
                                Explore our curated selection of premium products
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {featuredProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/details/${p.id}`}
                                    className="group botanical-card p-4"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden bg-botanical-bg rounded-2xl mb-4">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="text-botanical-fg font-medium text-sm line-clamp-2 group-hover:text-botanical-accent transition-colors mb-2">
                                        {p.title}
                                    </h4>
                                    <p className="text-botanical-fg font-bold text-lg">
                                        ${p.price}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <Link
                                to="/products"
                                className="botanical-button-primary text-base px-10 py-4 inline-block"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section - Botanical Style */}
                <section className="px-4 md:px-8 py-20 md:py-32 bg-gradient-to-br from-botanical-primary to-botanical-fg text-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-botanical-accent opacity-10 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <Leaf className="w-12 h-12 mx-auto mb-6 opacity-80" />
                        <h3 className="font-serif text-4xl md:text-5xl mb-6">
                            Join Our Community
                        </h3>
                        <p className="text-white text-opacity-90 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Subscribe to receive exclusive offers, seasonal collections, and mindful living tips delivered to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full bg-white text-botanical-fg placeholder-botanical-fg placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-botanical-accent"
                            />
                            <button className="px-8 py-4 bg-botanical-accent text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap shadow-botanical-md hover:shadow-botanical-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-white text-opacity-60 text-sm mt-4">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Landing;