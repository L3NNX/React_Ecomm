import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { CartContext } from '../utils/CartContext';

function Nav({ products }) {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const { setSelectedCategory } = useContext(ProductContext);
    const { getTotalItems } = useContext(CartContext);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <nav className='w-full md:w-[15%] h-auto bg-[#f0fdfa] flex flex-col items-center pt-5'>
            <div className='flex flex-col gap-2 w-[80%] mb-4'>
                <a href="/create" className="px-2 py-3 border border-blue-200 rounded text-blue-300 text-center">
                    Add New Product
                </a>
                <Link to="/cart" className="px-2 py-3 border border-green-200 rounded text-green-600 text-center relative">
                    Cart ({getTotalItems()})
                </Link>
            </div>

            <hr className='my-3 w-[80%]' />

            <h1 className='text-2xl w-[80%] mb-3 text-center'>Category</h1>

            <ul className='w-[80%]'>
                {uniqueCategories.map((category) => (
                    <li key={category} className='flex gap-2 items-center mb-3'>
                        <span className='inline-block w-[15px] h-[15px] bg-blue-100 rounded-full'></span>
                        <button onClick={() => handleCategoryClick(category)} className='text-left w-full'>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
