import mongoose from "mongoose";


// make img url required here and pass the 1st product img url in order object

const orderSchema = new mongoose.Schema({
    userId:String,
    shippingFee: {
        type: Number,
        required: true,
      },
    subTotal: {
        type: Number,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
        default: 'pending',
    },
    totalPrice:{
        type:Number,
        required:[true,"Can't get the total of products"]
    },
    products:{
        type:Array,
        required:[true],
        ref:'Product'
    },
    // paymentIntentId: {
    //     type: String,
    // },
},{timeStamps:true});


const Order = mongoose.model("Order",orderSchema);

export default Order;

