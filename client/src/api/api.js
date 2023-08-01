import axios from 'axios';

const url = "https://shopholic-central.vercel.app/api/v1";
const Api = axios.create({ baseURL: url })   

Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('profile')}`
    }
    return req;
})


const fetchAllProducts = (pageNumber) => Api.get(`/products/search?pageNumber=${pageNumber}`);
const getProduct = (id) => Api.get(`/products/${id}`);
const fetchProductsByFilter = (query) => Api.get(`products/search?${query}`);
// const query  = catgory=men&price>=40&subCategory='shirt'


const createNewOrder = (data) => Api.post("/user/recordOrder",data);
const getUserOrders = () => Api.get("/user/orderDetails");
const getOrder = (id) => Api.get(`/user/orderDetails/${id}`);

const getCartDetails = () => Api.get("/user/cartDetails");
const updateCart = (data) => Api.post("/user/updateCart",data);

const SignUp = (formData) => Api.post(`/user/signup`, formData);
const LogIn = (formData) => Api.post(`/user/signin`, formData);

const checkOut = (data) => Api.post('/user/checkout',data);



export {fetchAllProducts,getProduct,fetchProductsByFilter,createNewOrder,getUserOrders,getCartDetails,updateCart,SignUp,LogIn,checkOut,getOrder};