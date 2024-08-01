import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

function Home() {
    const { products, selectedCategory } = useContext(ProductContext);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return products ? (
        <>
            <Nav products={products} />
            <div className="w-full md:w-[85%] h-full p-5 overflow-y-auto bg-[#f1f5f9]">
                <h1 className="text-4xl font-serif text-center my-5">Our Products</h1>
                <div className="productcards flex flex-wrap justify-center gap-4">
                    {filteredProducts.map(p => (
                        <Link 
                            key={p.id} 
                            to={`/details/${p.id}`} 
                            className="card p-5 shadow-md rounded bg-[#fafafa] hover:scale-105 transition duration-300 ease-in-out w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] min-h-[250px]"
                        >
                            <div
                                className="w-full h-[60%] bg-contain bg-no-repeat bg-center mix-blend-multiply"
                                style={{ backgroundImage: `url(${p.image})` }}
                            />
                            <h1 className='truncate'>{p.title}</h1>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default Home;
