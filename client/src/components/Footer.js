import React from 'react'
import { Facebook,Instagram,Pinterest } from '@mui/icons-material'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='lg:px-12 py-20 pb-4' style={{backgroundColor:'rgb(23,23,23)',color:'rgb(189, 189, 189)'}}>
        <div className='footer-container p-4 md:px-16 md:py-8 '>
            <div className="footer-card">
                <h1>Categories</h1>
                <p>Men</p>
                <p>Women</p>
                <p>Shoes</p>
                <p>Watches</p>
            </div>
            <div className="footer-card">
                <h1>Returns</h1>
                <p>Shipping</p>
                <p>Track Order</p>
                <p>FAQs</p>
            </div>
            <div className="footer-card">
                <h1>Get In Touch</h1>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                 <div className='flex justify-between w-[30%]'>
                    <Facebook/>
                    <Instagram/>
                    <Pinterest/>
                 </div>   
            </div>
        </div>
        <p className='text-center'> Copyright ©2023 All rights reserved | Made by Harish</p>
    </div>
  )
}

export default Footer