import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./cart.css";
import {getOrders} from '../redux/userSlice';
import {useSelector ,useDispatch} from 'react-redux';


const Card = ({img,price,title,id,handleClick}) => {
        return (
            <Paper sx={{p:2}}>
                <div className='flex gap-4 items-center'>
                    <div className='cart-img-container' onClick={() => handleClick(id)}>
                        <img className='h-[100px] w-[100px] object-cover' src={img} alt="Image not given"/>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div><Typography variant='subtitle1'>{title}</Typography></div>
                        <div><Typography variant='subtitle2'>{`$${price}`}</Typography></div>
                    </div>
                </div>
            </Paper>
        )
}

const OrderCart = () => {

    const dispatch = useDispatch();
    const {orders} = useSelector((state) => state.user);
    
        const closeCart = (e) => {
            e.preventDefault();
            const el  = document.querySelector('.cart');
            el.classList.remove('showCart');
            el.classList.add('hidecart');
        }
    

        useEffect(() => {
            dispatch(getOrders());
        },[dispatch]);


        const handleClick = () => {
            alert("Take to order page")
        }


  return (
    <div className='cart p-12 h-screen gap-2 hidecart ' style = {{transition:"0.4s all ease-in-out"}}>
            <div className='flex justify-between items-center'>
                <h2 >Your Orders</h2>
                <CloseIcon className='cursor-pointer' onClick = {(e) => closeCart(e)} />
            </div>

            <div className='flex flex-col gap-4 overflow-scroll h-[650px]'>
                        {orders?.map(({name,img,price,qty,_id}) => <Card key={_id} img = {img} title={name} price={price} qty={qty} id={_id} handleClick={handleClick}  />)}
            </div>
    </div>
  )
}

export default OrderCart;