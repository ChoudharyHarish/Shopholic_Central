import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { styles } from "../styles";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  fetchProduct,
  modifyCart,
} from "../redux/userSlice";
import { Category } from "@mui/icons-material";
import Auth from "../components/Auth";

const Product = () => {
  const { id } = useParams();
  const { cart, totalPrice } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [cartProduct, setCartProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const { product, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleClick = (e, operator) => {
    e.preventDefault();

    if (!localStorage.getItem("profile")) {
      alert("You are not logged in please log in to use this functionality");
      setTimeout(() => {
        navigation("/auth");
      }, 1000);
      return;
    }

    if(selectedColor === 0 || selectedSize === 0){

      if((product?.category === 'men' || product?.category === "Women") && selectedSize === 0){
        if(selectedColor === 0) return alert("Please Select Color and Size");
        else return alert("Please Select Size")
      }
      else if(selectedColor === 0)  return alert("Please Select Color");
  
    }


   
    let tempCart = [...cart];
    let tempPrice = totalPrice;
    if (operator === "+") {
      setQuantity((prev) => prev + 1);
      dispatch(addToCart({ id, product }));
      let isProduct = tempCart.find((p) => p._id === id);
      if (isProduct) {
        const updatedProduct = { ...isProduct, qty: isProduct.qty + 1 };
        tempCart = tempCart.map((p) => (p._id === id ? updatedProduct : p));
      }
      else tempCart.push({...product,qty:1})
    }
    else {
      if (quantity === 0) setQuantity(0);
      else setQuantity((prev) => prev - 1);
      dispatch(decrement(id));
      let isProduct = tempCart.find((p) => p._id === id);
      if (isProduct){
        if(isProduct.qty === 1)  tempCart = tempCart.filter((product) => product._id !== id);
        else{ 
        const updatedProduct = { ...isProduct, qty: isProduct.qty - 1 };
        tempCart = tempCart.map((p) => (p._id === id ? updatedProduct : p));
        }
        tempPrice -= product.price;
      }
    }
    dispatch(modifyCart({ products: tempCart, totalPrice: tempPrice }));
  };

  const handleCart = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("profile")) {
      alert("You are not logged in please log in to use this functionality");
      setTimeout(() => {
        navigation("/auth");
      }, 1000);
      return;
    }
    
    if(selectedColor === 0 || selectedSize === 0){

      if((product?.category === 'men' || product?.category === "Women") && selectedSize === 0){
        if(selectedColor === 0) return alert("Please Select Color and Size");
        else return alert("Please Select Size")
      }
      else if(selectedColor === 0)  return alert("Please Select Color");
  
    }
    
    dispatch(addToCart({ id, product }));
    let tempCart = [...cart];
    let tempPrice = totalPrice;
    let isProduct = tempCart.find((p) => p._id === id);
    if (isProduct) {
      const updatedProduct = { ...isProduct, qty: isProduct.qty + 1 };
      tempCart = tempCart.map((p) => (p._id === id ? updatedProduct : p));
    }
    else tempCart.push({...product,qty:1})
    dispatch(modifyCart({ products: tempCart, totalPrice: tempPrice }));

  };

  const handleSizeChange = (event) => {
    setSelectedSize(Number(event.target.value));
  };

  const handleColorChange = (event) => {
    setSelectedColor(Number(event.target.value));
  };

  useEffect(() => {
    setCartProduct(cart?.find((p) => p._id === id));
    if (cartProduct) setQuantity(cartProduct?.qty);
    else setQuantity(0);
  }, [id, decrement, handleCart]);


  return isLoading ? (
    <div>Loding....</div>
  ) : (
    <div className="product-container">
      <div className="flex flex-wrap  justify-center items-center px-8 md:px-20 py-36 lg:py-28">
        <div
          className="img-container flex-1  overflow-hidden"
          style={{ minWidth: "360px",maxWidth:"420px" }}
        >
          <img src={product?.img} className="" alt="" />
        </div>
        <div className="mx-4 "></div>
        <div className="pt-4 flex-1 info-container flex items-start justify-start flex-col">
          <h1 className={`${styles.subHeading} h-main`}>{product?.name}</h1>
          <p>{"₹" + product?.price}</p>
          <p>{product?.description}</p>

          <div className="flex justify-between">

        {(product?.category === "men" || product?.category === "Women") &&  
            <div
              className="mr-2 options flex items-center "
              style={{ border: "0.8px solid grey" }}
            >
              <p className="m-auto mx-2">Size</p>
              <select name="size" id="size" value={selectedSize} onChange={handleSizeChange}>
                <option value="0">Choose Option</option>
                <option value="1">M</option>
                <option value="2">L</option>
                <option value="3">XL</option>
                <option value="4">XXL</option>
                <option value="5">S</option>
              </select>
            </div>
        }
            <div
              className="ml-2 options flex items-center "
              style={{ border: "0.8px solid grey" }}
            >
              <p className="m-auto mx-2">Color</p>
              <select name="color" id="color" value={selectedColor} onChange={handleColorChange}>
                <option value="0">Choose Option</option>
                <option value="1">RED</option>
                <option value="2">BLUE</option>
                <option value="3">GREEN</option>
                <option value="4">YELLOW</option>
                <option value="5">PINK</option>
              </select>
            </div>
          </div>

          <div className="counter flex items-center mt-4">
            <button
              onClick={(e) => handleClick(e, "-")}
              className="px-3 py-2 flex justify-center items-center"
              style={{ border: "0.9px solid grey" }}
            >
              -
            </button>
            <p
              className="m-auto px-3 py-2"
              style={{ border: "0.9px solid grey" }}
            >
              {quantity}
            </p>
            <button
              onClick={(e) => handleClick(e, "+")}
              className="px-3 py-2 flex justify-center items-center"
              style={{ border: "0.9px solid grey" }}
            >
              +
            </button>
          </div>

          <div className="flex justify-between gap-4">
            <button
              className="shop-now mt-4 cursor-pointer"
              onClick={(e) => handleCart(e)}
            >{`${!cartProduct ? "Add To Cart" : "Added to Cart"}`}</button>
            <button className="shop-now mt-4 cursor-pointer">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
      <Cart title="Cart" cart={cart} />
      <Auth/>
    </div>
  );
};

export default Product;
