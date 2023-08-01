import Order from "../Models/order.js";


const getOrderDetails = async(req,res) => {
    const {userId} = req.user;
    try{
        const orders = await Order.find({userId});
        return res.status(202).json(orders);
    }
    catch(error){
        if(!userId){
        return res.status(404).json("Token Expired Please login Again");
        }
        res.status(500).json("Something Bad Happen Try Again Later");
    }
}

const getSpecificOrder = async(req,res)=>{
    const {userId} = req.user;
    const {id} = req.params;
    // console.log(id);
    try{
        const order = await Order.findOne({userId,_id:id});
        res.status(202).json(order);
    }
    catch(error){
        res.status(500).json("Something Bad Happen Try Again Later");
    }
}


const recordOrder = async(req,res) => {
    console.log("Here");
        const {subTotal,cart,shippingFee} = req.body;
        // console.log(cart);
        const {userId} = req.user;

        // console.log(req.body);

        // products :- [{name:'',price:"",qty:'',image}]
        try{
            const totalPrice = shippingFee + subTotal;
            const order = await Order.create({subTotal,products:cart,shippingFee,totalPrice,userId});
            // console.log(order);
            res.status(202).json(order);
        }
        catch(error){
            console.log(error);
            res.status(500).json("Something Bad Happen Try Again Later");

        }
}


export {getOrderDetails,recordOrder,getSpecificOrder}