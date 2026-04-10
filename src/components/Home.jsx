import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import { ShoppingCart } from 'lucide-react';

function Home() {
    const { products, selectedCategory } = useContext(ProductContext);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return products ? (
        <>
            <Nav products={products} />
            <div className="w-full md:w-[85%] h-full p-4 md:p-8 overflow-y-auto bg-botanical-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="font-serif text-5xl md:text-7xl text-botanical-fg mb-4">
                            Curated <span className="italic text-botanical-accent">Selection</span>
                        </h1>
                        <p className="text-botanical-fg text-opacity-70 text-lg">Discover our thoughtfully selected collection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {filteredProducts.map((p, idx) => (
                            <Link
                                key={p.id}
                                to={`/details/${p.id}`}
                                className={`botanical-card group overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
                            >
                                <div className="relative h-64 md:h-72 overflow-hidden bg-botanical-secondary bg-opacity-20">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover rounded-t-[40px] group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="font-serif text-xl md:text-2xl text-botanical-fg line-clamp-2 mb-2 group-hover:text-botanical-accent transition-colors duration-300">
                                            {p.title}
                                        </h3>
                                        <p className="text-sm text-botanical-fg text-opacity-60 capitalize mb-4">{p.category}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="font-serif text-2xl text-botanical-accent">${p.price}</span>
                                        <ShoppingCart size={20} className="text-botanical-primary group-hover:text-botanical-accent transition-colors duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-botanical-fg text-opacity-60 text-lg">No products found in this category</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default Home;
