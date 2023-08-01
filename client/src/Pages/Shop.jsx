import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import Cart from "../components/Cart";
import Auth from "../components/Auth";
import { useSelector,useDispatch } from 'react-redux';

const Shop = () => {
  const {state} = useLocation();
  let category = "";
  if(state) category = state.category;



  const cart =  useSelector((state) => state.user.cart);


  return (
    <>
      <Products category={category} />
     <Cart title='Cart' cart={cart}/>
     <Auth/>
    </>
     
  )
}

export default Shop