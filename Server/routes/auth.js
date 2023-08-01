import express from 'express';
const router = express.Router();

import { signUp,signIn } from '../controllers/auth.js';
import {updateCart, getCartDetails,getHistory } from "../controllers/cart.js";
import { getOrderDetails,recordOrder ,getSpecificOrder} from '../controllers/order.js';
import {makePayment} from "../controllers/payment.js";

import auth from '../middleware/Authentication.js';

//Handle authentcaion
router.post("/signup",signUp);
router.post("/signin",signIn);

//Handle User related Stuff

//Cart      
router.get("/cartDetails", auth ,getCartDetails);
router.post('/updateCart', auth,updateCart);


//orders
router.get('/orderDetails',auth,getOrderDetails);
router.get('/orderDetails/:id',auth,getSpecificOrder);
router.post('/recordOrder',auth,recordOrder);

//stripe
router.post('/checkout',auth,makePayment);

export default router;