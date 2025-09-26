import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import type { ProductProps } from '../home';
import {  useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";

export  function Product(){
  const { addItemCart, productDetail } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


useEffect(() => {


}, [id]);


function handleAddCartItem(product: ProductProps){
  addItemCart(product);
    toast.success("Produto adicionado no carrinho", {
      style: {
        borderRadius:10,
        backgroundColor: "#121212",
        color: "#fff"
      }
    })
  navigate(`/cart`);
}

  
    return(
      <div>
        <main className="w-full max-w-7xl px-4 mx-auto">


     {productDetail === null ? (
    <div className='flex flex-col items-center justify-center'>
    <p className="font-bold text-2xl mb-4 mt-10 text-center">Produto não encontrado</p>
    <Link 
      to="/"
      className='bg-slate-600 my-3 px-3 p-1 text-white rounded font-medium'
    >
      Voltar para Home
    </Link>
  </div>
    ) : (
  <div className="w-full max-w-7xl px-4 mx-auto">
    <div className="flex flex-col sm:flex-row mt-20">
      <img 
        src={productDetail.cover} 
        alt={productDetail.title} 
        className="w-full rounded-lg max-h-120 mb-2"
      />
    <div className="flex flex-col mt-30">
      <h2 className="font-bold mb-2 text-2xl">{productDetail.title}</h2>
      <p className="w-full mt-1 mb-2">{productDetail.description}</p>
      <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">
          {productDetail.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </strong>
        <button
          className="bg-zinc-900 p-1 rounded"
          onClick={() => handleAddCartItem(productDetail)}
        >
          <BsCartPlus size={23} color="#FFF"/>
        </button>
      </div>
    </div>
  </div>
</div>
)}

        </main>
      </div>
    )
  }
