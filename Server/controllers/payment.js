import dotenv from 'dotenv';
dotenv.config();
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);



//stripe format for product
// price_data: {
//     currency: 'usd',
//     product_data: {
//       name: 'T-shirt',
//     },
//     unit_amount: 2000,
//   },
//   quantity: 1,

const makePayment = async(req,res) => {

    const data = req.body; 
       //req.body actual product of our cart so no need to fetch from database
    try{
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items: data.map((item) => {
           return {
                price_data : {
                    currency:'inr',
                    product_data:{
                        name:item.name
                    },
                    unit_amount:item.price*100
                },
                quantity: item.qty
            }
    }),
        mode: 'payment',
        success_url: 'https://shopholic-central.netlify.app/success',
        cancel_url: 'https://shopholic-central.netlify.app/cancel',
      });

     return  res.status(202).json({url:session.url});
    }
    catch(err){
        console.log(err);
    }
}

export {makePayment};