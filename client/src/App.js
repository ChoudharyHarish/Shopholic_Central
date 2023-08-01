import './App.css';
import "./index.css";
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from "./Pages/Home";
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import Orders from './Pages/Orders';
import Order from './Pages/Order';
import Success from './Pages/Success';  
import Cancel from './Pages/Cancel';
import NotFound from "./Pages/NotFound";
import { useState } from 'react';

import { products } from './constants';


//Additional Features:
// 1). Google Login
// 2). Size and Color for products
// 3). Email Notification



function App() {
  // use redux to maintain cart,wishlist,user-status also maintain cart,wishlist on backend also


  const [filteredProducts,setFilteredProducts] = useState(products);


  return (
    <BrowserRouter>
         <div className="App relative" style={{fontFamily:'Poppins'}}>
            <Navbar  products = {filteredProducts} setFilteredProducts={setFilteredProducts} />
            <Routes>
            <Route path = '/' exact element = {<Navigate to = '/home'/>}/>
            <Route path = '/home' exact element = {<Home/>}/>
            <Route path ='/auth' element={<Auth/>}/>
            <Route path='/shop' element = {<Shop/>}/>
            <Route path='/shop/search' exact element = {<Shop/>}/>
            <Route path = '/products/:id' element = {<Product/>}/>
            <Route path ='/orders' element={<Orders/>}/>
            <Route path ='/order/:id' element={<Order/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/success' element = {<Success/>}/>
            <Route path='/cancel' element = {<Cancel/>}/>
            <Route path = '*' element = {<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
  );
}

export default App;
