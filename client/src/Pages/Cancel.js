import React from 'react'
import error from "../img/error.jpeg";
import { Link } from 'react-router-dom';

export default function Cancel() {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-2' >
       <img src={error} className='h-auto max-w-full' alt="" />
       <h1> OOPS! Something Went Wrong</h1> 
       <p>We are working on it </p>
       <Link to ='/home' className='text-decoration-none text-black'>
         Back to Home
       </Link>
    </div>
  )
}
