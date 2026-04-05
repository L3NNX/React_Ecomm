import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="w-full flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <button
          onClick={() => navigate("/")}
          className="border border-blue-500 text-blue-600 font-bold py-2 px-6 rounded hover:bg-blue-50"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full p-8">
      <button
        onClick={() => navigate("/")}
        className="self-start mb-6 text-blue-600 hover:text-blue-800 font-semibold"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex-1 overflow-y-auto mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex gap-6 mb-6 pb-6 border-b border-gray-200">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{item.category}</p>
              <p className="text-lg font-bold">${item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="font-semibold mb-3">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="border border-red-500 text-red-600 font-semibold py-1 px-3 rounded hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 pt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Total:</h2>
          <p className="text-3xl font-bold text-green-600">${getTotalPrice()}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => clearCart()}
            className="border border-gray-400 text-gray-600 font-bold py-2 px-6 rounded hover:bg-gray-100"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-blue-500 text-blue-600 font-bold py-2 px-6 rounded hover:bg-blue-50"
          >
            Continue Shopping
          </button>
          <button
            className="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-700 ml-auto"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
