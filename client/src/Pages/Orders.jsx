import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../redux/userSlice'
import  StickyHeadTable from "../components/Table";
import Cart from '../components/Cart';  
import Auth from '../components/Auth';


const Orders = () => {



  const dispatch = useDispatch();

  const {orders,warning,cart} = useSelector((state) => state.user);

  useEffect(() => {
          dispatch(getOrders());
  },[dispatch]);

  useEffect(()=>{
    if(warning !== '') alert(warning);
},[warning]);


  return (
    <>
    <div className='py-32 flex flex-col  px-16  lg:py-20 '>
        <h1>Your Orders</h1>
        {orders &&  <StickyHeadTable orders = {orders}/>}
    </div>
         <Cart cart={cart}/>
         <Auth/>
       </>
  )
}

export default Orders