import React from 'react'
import { Link } from 'react-router-dom'
import error from "../img/error.jpeg";

import Cart from '../components/Cart';
import Auth from '../components/Auth';
import { useSelector } from 'react-redux';

const NotFound = () => {

  const { cart } = useSelector((state) => state.user);


  return (
    <>
      <div className='h-screen flex justify-center items-center flex-col gap-2' >
        <img src={error} className='h-auto max-w-sm' alt="" />
        <h1> OOPS! Something Went Wrong</h1>
        <p>You got on wrong Page</p>
        <Link to='/home' className='text-decoration-none text-black'>
          Back to Home
        </Link>
      </div>

      <Cart title="Cart" cart={cart} />
      <Auth />
    </>
  )
}

export default NotFound