import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "product name must be provided"],
  },
  price: {
    type:Number,
    require: [true, "product price mustx be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    require: [true, "category of product is required"],
  },
  company: {
    type: String,
    require: [true, "company name of product is required"],
  },
  subCategory: {
    type: String,
  },
  description: {
    type: String,
    require: [true, "description of product is required"],
  },
  img: {
    type: String,
  },
  inventory: {
    type: Number,
    // required: true,
    default: 15,
  },
});


const Product =  mongoose.model('Product', productSchema)

export default Product;