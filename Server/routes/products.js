import express from 'express';
const router = express.Router();
import { getAllProducts,getPostsByFilter,getProduct} from '../controllers/products.js';

//Products
router.get("/",getAllProducts);
router.get("/search",getPostsByFilter);
router.get('/:id',getProduct);


export default router;