import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Share2, MessageSquare, Send } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-botanical-secondary bg-opacity-30 border-t border-botanical-border mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="font-serif text-xl text-botanical-fg mb-6">About Us</h3>
                        <p className="text-botanical-fg text-opacity-70 text-sm leading-relaxed">
                            We're dedicated to bringing you premium products with exceptional quality and style for your lifestyle.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl text-botanical-fg mb-6">Shop</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/dashboard" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Clothing
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Jewelery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl text-botanical-fg mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl text-botanical-fg mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-botanical-fg text-opacity-70 hover:text-botanical-accent transition-colors duration-300">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-botanical-border">
                    <div>
                        <h4 className="font-serif text-lg text-botanical-fg mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail size={18} className="text-botanical-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-botanical-fg text-opacity-70 text-sm">Email</p>
                                    <a href="mailto:support@store.com" className="text-botanical-fg hover:text-botanical-accent transition-colors duration-300">
                                        support@store.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-botanical-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-botanical-fg text-opacity-70 text-sm">Phone</p>
                                    <a href="tel:+1234567890" className="text-botanical-fg hover:text-botanical-accent transition-colors duration-300">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-botanical-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-botanical-fg text-opacity-70 text-sm">Address</p>
                                    <p className="text-botanical-fg">123 Market Street, Store City, ST 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg text-botanical-fg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-botanical-primary bg-opacity-20 flex items-center justify-center text-botanical-primary hover:bg-botanical-accent hover:text-white transition-all duration-300">
                                <Heart size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-botanical-primary bg-opacity-20 flex items-center justify-center text-botanical-primary hover:bg-botanical-accent hover:text-white transition-all duration-300">
                                <Share2 size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-botanical-primary bg-opacity-20 flex items-center justify-center text-botanical-primary hover:bg-botanical-accent hover:text-white transition-all duration-300">
                                <MessageSquare size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-botanical-primary bg-opacity-20 flex items-center justify-center text-botanical-primary hover:bg-botanical-accent hover:text-white transition-all duration-300">
                                <Send size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-botanical-border text-center">
                    <p className="text-botanical-fg text-opacity-60 text-sm">
                        &copy; 2024 Premium Store. All rights reserved. | Crafted with care
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
