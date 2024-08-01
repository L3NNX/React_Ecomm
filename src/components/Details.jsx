import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Loading from './Loading'
import { ProductContext } from '../utils/Context';

const Details = () => {
  const navigate = useNavigate()
  const { products, setProducts } = useContext(ProductContext);
  const [product, setproduct] = useState(null)
  const { id } = useParams();

  // const getsingleproduct = async () => { 
  //     try {
  //         const {data} = await axios(`/products/${id}`)
  //         // console.log(data)
  //         setProduct(data)   
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }    

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
    <div className="w-screen flex h-full  justify-center items-center p-12 m-auto">

      <div className='flex  w-full h-[23rem] gap-10 justify-center'>

        <div className='h-full '>
          <img className="object-cover w-full h-full"
            src={`${product.image}`}
            alt=""
          />
        </div>

        <div className="content flex flex-col pt-10  w-[40%] justify-center gap-3">
          <h1 className="text-4xl">
            {product.title}
          </h1>
          <h3 className="text-zinc-400">{product.category}</h3>
          <h2>{product.price}</h2>
          <p>{product.description}</p>

          <div className='flex gap-4'>
            <Link to={`/edit/${product.id}`} className="border border-blue-500 text-slate-600 font-bold py-2 px-4 rounded">
              Edit
            </Link>

            <button onClick={() => ProductDeleteHandler(product.id)} className="border border-red-500 text-slate-600 font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>

        </div>
      </div>

    </div>

  ) : <Loading />
}

export default Details; 