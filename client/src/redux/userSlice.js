import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAllProducts,getProduct,fetchProductsByFilter,createNewOrder,getUserOrders,getOrder, getCartDetails,updateCart,SignUp,LogIn} from "../api/api";
import { googleLogout } from '@react-oauth/google';



export const fetchProducts = createAsyncThunk('fetchProducts', async (pageNumber, { getState }) => {
    
     const { data : {products,totalPage} } = await fetchAllProducts(pageNumber);
    return {products,totalPage};
})

export const filterProducts = createAsyncThunk('filterProducts', async ({page,category,min,max,sort}, { getState }) => {
    let query = `pageNumber=${page}`;
    if(category === 'men' || category === 'Women' || category === 'Accessories' || category === 'All Products') query += `&category=${category}`
    else if(category === 'Bags' || category === 'Watch') query += `&subCategory=${category}`
    if(sort) query += `&sort=${sort}`
    if(min && max && min !== 1e7 && max !== 0) query += `&numericFilters=price>=${min},price<=${max}`
   
    // console.log(query);

    const { data :{products,totalPage}} = await fetchProductsByFilter(query);
    // console.log(data);
    return {products,totalPage};
})

export const fetchProduct = createAsyncThunk('fetchProduct', async (_id) => {
    const { data } = await getProduct(_id);
    return {data};
})
export const signUp = createAsyncThunk('signUp', async (formData) => {
    const { data } = await SignUp(formData);
    return data;
})
export const signIn = createAsyncThunk('signIn', async (formData) => {
    const { data } = await LogIn(formData);
    return data;
})

export const createOrder = createAsyncThunk('createOrder', async({cart,subTotal,shippingFee}) => {
    const { data } = await createNewOrder({cart,subTotal,shippingFee});
    return data;
})

export const getOrders = createAsyncThunk('getOrders', async () => {
    try{
    const { data } = await getUserOrders();
    console.log(data);
    return data;
    }
    catch(error){
    return error.response.data;
}
})

export const getCurrOrder = createAsyncThunk('getCurrOrder',async(id) => {
        const {data} = await getOrder(id);
        return data;
})

export const modifyCart = createAsyncThunk('modifyCart', async ({products,totalPrice}) => {
    const { data } = await updateCart({products,totalPrice});
    // console.log(data);
    return data;
})
export const getCart = createAsyncThunk('getCart', async () => {
    try{
        const { data } = await getCartDetails();
        if(data.products) return data.products;
        else return [];
    }
    catch(error){
        console.log(error);
        return error;
    }
})



const initialState = {
    isAuthenticated: false,
    cart:[],
    totalPrice:0,
    totalQty:0,
    products:[],
    totalPage:0,
    product:null,
    isLoading:true,
    category:"",
    currOrderId:null,
    orderDate:null,
    currOrder:null,
    orders:[],
    orderFee:0,
    orderTotal:0,
    warning:'',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
       addToCart : (state,action) => {
            const {id,product} = action.payload;
            const isProduct = state.cart.find((p) => p._id === id);
            if(isProduct){
                isProduct.qty += 1;
            }
            else{ 

                state.cart = [...state.cart,{...product,qty : 1}];
            }
            state.totalQty+=1;
       },
       removeFromCart : (state,action) => {
                const {id} = action.payload;
                const item = state.cart.find((p) => p._id === id);
                state.cart = state.cart.filter((product) => product._id !== id);
                state.totalQty-=item.qty;
        },
       decrement: (state,action) => {
            const id = action.payload;
            const product = state.cart.find((p) => p._id === id);
            if(product){
                product.qty -= 1;
                if(product.qty === 0)  state.cart = state.cart.filter((product) => product._id !== id);    
                state.totalQty-=1;
            }

       },
       setCategory: (state,action) => {
                state.category=action.payload;
       },
       getTotal: (state) => {
           state.totalPrice =  state.cart?.reduce((prev,product) => prev + (product.price * product.qty),0);
        },
       getTotalQuantity:(state) => {
            // console.log("here");
            state.totalQty = state.cart.reduce((prev,product) => prev +  product.qty,0);
            // console.log(state.totalQty);
       },
       setIsLoading: (state, action) => {
        state.isLoading = action.payload;
        },
        setUserAuthenticated: (state,action)=> {
            state.isAuthenticated = action.payload;
       },
       logout:(state) => {
        const profile = localStorage.getItem('profile');
        if(profile?.length > 500){
            googleLogout();
        }
        localStorage.clear();
        state.isAuthenticated=false;
        state.user = null;
        state.cart =[];
        state.totalPrice=0;
        state.totalQty=0;   
       },
       googleLogin: (state, action) => {
        const { result, token } = action.payload
        state.user = {
            imageUrl: result.picture,
            name: result.name,
            userId: result.sub,
            email : result.email
        }
        localStorage.setItem('profile', token)
        localStorage.setItem('user', JSON.stringify({ ...state.user }))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        const {products,totalPage } = action.payload;
        state.products = products;
        state.totalPage = totalPage;
    })
    builder.addCase(filterProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        const {products,totalPage } = action.payload;
        state.products = products;
        state.totalPage = totalPage;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const {data } = action.payload;
        state.product = data;
        state.length = data.length;

    })
    builder.addCase(signUp.fulfilled, (state, action) => {
        const result = action.payload;
        state.user = {
            name: result.name,
            userId: result.userId,
            email:result.email
        }
        state.isAuthenticated = true;
        localStorage.setItem('profile', result.token);
        localStorage.setItem('user', JSON.stringify({ ...state.user }));

    })
    builder.addCase(signIn.fulfilled, (state, action) => {
        const result = action.payload;
        state.user = {
            name: result.name,
            userId: result.userId,
            email:result.email,
        }
        state.isAuthenticated = true;

        localStorage.setItem('profile', result.token);
        localStorage.setItem('user', JSON.stringify({ ...state.user }));
    })
    builder.addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;
        state.cart = data;
        if(data.length > 0){
            state.totalQty = state.cart.reduce((prev,product) => prev +  product.qty,0);
            state.totalPrice =  state.cart?.reduce((prev,product) => prev + (product.price * product.qty),0);
        }
    })  
    builder.addCase(modifyCart.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;
        state.cart = data.products;
    })
    builder.addCase(createOrder.fulfilled,(state,action) => {
        state.cart = [];
        state.totalPrice = 0;
        state.totalQty =0;
        const data = action.payload;
        state.currOrderId = data._id;
        localStorage.setItem('orderId',JSON.stringify(data._id));
        state.currOrder = data.products;
        state.orderDate = data.createdAt;
        state.orderFee = data.totalPrice - data.shippingFee;
        state.shippingFee = data.shippingFee;
        localStorage.removeItem('cart');
        localStorage.removeItem('subTotal');
    })
    builder.addCase(getOrders.fulfilled, (state, action) => {
        if(action.payload === "Token Expired Please Login Again"){
            state.warning = action.payload;
        }
        else{
        state.isLoading = false;
        const data = action.payload;
        state.orders = data;
        }
   }) 
    builder.addCase(getCurrOrder.fulfilled, (state, action) => {
        state.isLoading=false;
        if(action.payload === "Token Expired Please Login Again"){
            state.warning = action.payload;
        }
        else{
            const data = action.payload;
            state.currOrderId = data._id;
            state.orderDate = data.createdAt;
            state.currOrder = data.products;
            state.orderFee = data.totalPrice - data.shippingFee;
            state.shippingFee = data.shippingFee;
        }
   }) 
  }
})  

export const { addToCart,decrement,removeFromCart ,getTotal,setIsLoading,getTotalQuantity, setUserAuthenticated, logout,setCategory, googleLogin,googleLogOut} = userSlice.actions;
export default userSlice.reducer;