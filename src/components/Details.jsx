import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from './Loading'
import { ProductContext } from '../utils/Context';
import { CartContext } from '../utils/CartContext';
import { ArrowLeft, CreditCard as Edit, Trash2, ShoppingCart } from 'lucide-react';

const Details = () => {
  const navigate = useNavigate()
  const { products, setProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setproduct] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, [products])

  const ProductDeleteHandler = (id) => {
    const FilteredProduct = products.filter((p) => p.id !== id)
    setProducts(FilteredProduct);
    localStorage.setItem('products', JSON.stringify(FilteredProduct));
    navigate("/");
  };

  return product ? (
    <div className="w-full md:w-full min-h-screen bg-botanical-bg ">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-botanical-primary hover:text-botanical-accent transition-colors duration-300 mb-8 md:mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="flex flex-col">
            <div className="relative h-80 md:h-96 rounded-t-[40px] overflow-hidden bg-botanical-secondary bg-opacity-20 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start pt-0 md:pt-4">
            <div className="inline-block bg-botanical-secondary bg-opacity-50 rounded-full px-4 py-1 mb-6 w-fit">
              <span className="text-sm text-botanical-fg text-opacity-70 capitalize">{product.category}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-botanical-fg mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-serif text-5xl text-botanical-accent">${product.price}</span>
            </div>

            <p className="text-botanical-fg text-opacity-70 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
                className="botanical-button-accent flex items-center justify-center gap-2 py-3 h-12 flex-1"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <Link
                to={`/edit/${product.id}`}
                className="botanical-button-secondary flex items-center justify-center gap-2 py-3 h-12 flex-1"
              >
                <Edit size={20} />
                Edit
              </Link>
              <button
                onClick={() => ProductDeleteHandler(product.id)}
                className="border border-red-400 text-red-600 rounded-full px-6 py-2 font-medium tracking-widest uppercase text-sm hover:bg-red-50 transition-all duration-300"
              >
                <Trash2 size={18} className="inline mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  ) : <Loading />
}

export default Details; 