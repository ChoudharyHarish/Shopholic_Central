import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { logout } from "../redux/userSlice";
import { CloseOutlined } from "@mui/icons-material";

import "./cart.css";
import { Avatar } from "@mui/material";


export default function Auth({setShowModal}) {
  const [user,setUser] = useState(null);

  const {isAuthenticated } = useSelector((state) => state.user);


  const dispatch = useDispatch();


  const openCart = (e)=>{
    e.preventDefault();
    const el = document.querySelector(".cart");
    el?.classList.add("showCart");
    el?.classList.remove("hidecart");
  }

  const closeCart = (e) => {
    e.preventDefault();
    const el  = document.querySelector('.user');
    // console.log(el);
    el.classList.remove('showCart');
    el.classList.add('hidecart');
}

    useEffect(()=>{
       setUser(JSON.parse(localStorage.getItem("user")))
    },[isAuthenticated]);
 


return (

<div className='user p-8 h-full gap-4 hidecart' style = {{transition:"0.4s all ease-in-out"}}>
<div className='flex justify-between'>
    <h4 className="">Account Details</h4>
    <CloseOutlined className='cursor-pointer' onClick = {(e) => closeCart(e)} />
</div>

<div className='flex flex-col justify-between h-full'>

    {
      user ? 
    <>  
        <div className="flex flex-col gap-2">
         <p className="cursor-pointer text-lg flex items-center justify-between">
         {user?.imageUrl ? <Avatar alt="Remy Sharp" src={user.imageUrl} />  :
          <Avatar> {user?.name.slice(0,1)} </Avatar>
          }
         Welcome {user?.name} 👋
         </p>
         <Link to='/orders'>
         <button className="cursor-pointer text-center text-md text-decoration-none w-full shop-now p-2">View my orders</button>
         </Link>

         <button className="cursor-pointer text-center text-md text-decoration-none w-full shop-now p-2" onClick={(e) => openCart(e)}  >View my cart</button>
        </div>
         <button className="cursor-pointer text-center text-md text-decoration-none w-1/2 shop-now p-2 text-white" onClick={(e) => {e.preventDefault(); dispatch(logout())}}>Logout</button>

     </>
      :
      <>
      <div>
      <p className="cursor-pointer">To View your history please Login</p>
      </div>
      <Link to='/auth' className="cursor-pointer text-center text-md text-decoration-none w-1/2 shop-now p-2 text-white">Login</Link>
      </>
    } 

    

</div>
</div>
)

}





