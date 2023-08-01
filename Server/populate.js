import dotenv from 'dotenv';
dotenv.config();

import { connectDb } from './db/connection.js';
import Product from './Models/product.js';

import * as products from './products.json' assert { type: 'json' };


const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL)
    await Product.deleteMany()
    await Product.create(products.default)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()