import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/CartContext';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="w-full md:w-full min-h-screen bg-botanical-bg flex flex-col justify-center items-center p-8">
        <ShoppingBag size={64} className="text-botanical-secondary mb-6" />
        <h1 className="font-serif text-5xl text-botanical-fg mb-4 text-center">Your Cart is <span className="italic text-botanical-accent">Empty</span></h1>
        <p className="text-botanical-fg text-opacity-60 mb-8 text-lg text-center">Explore our curated collection and add some items</p>
        <button
          onClick={() => navigate("/")}
          className="botanical-button-primary h-12 px-8"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[85%] min-h-screen bg-botanical-bg overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-botanical-primary hover:text-botanical-accent transition-colors duration-300 mb-8 md:mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </button>

        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl text-botanical-fg mb-2">
            Your <span className="italic text-botanical-accent">Order</span>
          </h1>
          <p className="text-botanical-fg text-opacity-60">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="botanical-card p-6 flex gap-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-botanical-secondary bg-opacity-20 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-botanical-fg mb-1">{item.title}</h3>
                    <p className="text-sm text-botanical-fg text-opacity-60 capitalize">{item.category}</p>
                  </div>
                  <p className="font-serif text-lg text-botanical-accent">${item.price}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="flex items-center gap-2 bg-botanical-secondary bg-opacity-30 rounded-full px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-botanical-secondary rounded-full transition-colors duration-300"
                    >
                      <Minus size={16} className="text-botanical-fg" />
                    </button>
                    <span className="w-6 text-center font-medium text-botanical-fg text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-botanical-secondary rounded-full transition-colors duration-300"
                    >
                      <Plus size={16} className="text-botanical-fg" />
                    </button>
                  </div>

                  <p className="font-serif text-lg text-botanical-fg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="botanical-card p-8 sticky top-8 space-y-6">
              <div>
                <p className="text-sm text-botanical-fg text-opacity-60 mb-2">Order Summary</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-botanical-border">
                  <div className="flex justify-between text-botanical-fg">
                    <span>Subtotal</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-botanical-fg text-opacity-60 text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-botanical-fg">Total</span>
                  <span className="font-serif text-3xl text-botanical-accent">${getTotalPrice()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="botanical-button-accent w-full h-12"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => clearCart()}
                  className="botanical-button-secondary w-full h-10 text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
