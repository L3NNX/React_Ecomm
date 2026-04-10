import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { CartContext } from '../utils/CartContext';
import { Menu, X, ShoppingCart, Plus } from 'lucide-react';

function Nav({ products }) {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const { setSelectedCategory, selectedCategory } = useContext(ProductContext);
    const { getTotalItems } = useContext(CartContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
        setMobileMenuOpen(false);
    };

    const handleShowAll = () => {
        setSelectedCategory(null);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className='hidden md:flex w-[15%] h-full bg-botanical-bg flex-col items-center pt-8 border-r border-botanical-border'>
                <div className='flex flex-col gap-3 w-[85%] mb-8'>
                    <a href="/create" className="botanical-button-primary flex items-center justify-center gap-2 h-11">
                        <Plus size={18} />
                        Add Product
                    </a>
                    <Link to="/cart" className="botanical-button-secondary flex items-center justify-center gap-2 h-11 relative">
                        <ShoppingCart size={18} />
                        Cart <span className="ml-auto bg-botanical-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{getTotalItems()}</span>
                    </Link>
                </div>

                <div className='w-[85%] h-px bg-botanical-border mb-8' />

                <h3 className='font-serif text-lg text-botanical-fg w-[85%] mb-4'>Categories</h3>

                <ul className='w-[85%] space-y-2'>
                    <li>
                        <button
                            onClick={handleShowAll}
                            className={`w-full text-left px-3 py-2 rounded-full transition-all duration-300 ${selectedCategory === null ? 'bg-botanical-primary text-white' : 'text-botanical-fg hover:bg-botanical-secondary hover:bg-opacity-40'}`}
                        >
                            All Products
                        </button>
                    </li>
                    {uniqueCategories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                                className={`w-full text-left px-3 py-2 rounded-full transition-all duration-300 capitalize ${selectedCategory === category ? 'bg-botanical-primary text-white' : 'text-botanical-fg hover:bg-botanical-secondary hover:bg-opacity-40'}`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className='md:hidden fixed top-4 left-4 z-40 botanical-button-primary p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {mobileMenuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden' onClick={() => setMobileMenuOpen(false)} />
            )}

            <nav className={`fixed top-0 left-0 w-full bg-botanical-bg border-b border-botanical-border z-40 flex flex-col p-6 pt-16 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex flex-col gap-3 mb-6'>
                    <a href="/create" className="botanical-button-primary flex items-center justify-center gap-2 h-11">
                        <Plus size={18} />
                        Add Product
                    </a>
                    <Link to="/cart" className="botanical-button-secondary flex items-center justify-center gap-2 h-11 relative">
                        <ShoppingCart size={18} />
                        Cart <span className="ml-auto bg-botanical-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{getTotalItems()}</span>
                    </Link>
                </div>

                <div className='w-full h-px bg-botanical-border mb-6' />

                <h3 className='font-serif text-lg text-botanical-fg mb-4'>Categories</h3>

                <ul className='space-y-2'>
                    <li>
                        <button
                            onClick={handleShowAll}
                            className={`w-full text-left px-3 py-2 rounded-full transition-all duration-300 ${selectedCategory === null ? 'bg-botanical-primary text-white' : 'text-botanical-fg hover:bg-botanical-secondary hover:bg-opacity-40'}`}
                        >
                            All Products
                        </button>
                    </li>
                    {uniqueCategories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                                className={`w-full text-left px-3 py-2 rounded-full transition-all duration-300 capitalize ${selectedCategory === category ? 'bg-botanical-primary text-white' : 'text-botanical-fg hover:bg-botanical-secondary hover:bg-opacity-40'}`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Nav;
