import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from'./utils/Context.jsx'
import CartContextProvider from './utils/CartContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Context>
    <CartContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </CartContextProvider>
  </Context>

)
