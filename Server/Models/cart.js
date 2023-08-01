import mongoose from "mongoose";    

const cartSchema = new mongoose.Schema({
    userId: String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    totalPrice:{
        type:Number,
        required:[true,"Can't get the total of products"]
    },
    products:{
       type:Array,
       ref:'Product'
    }
})

const Cart = mongoose.model('Cart',cartSchema);
export default Cart;