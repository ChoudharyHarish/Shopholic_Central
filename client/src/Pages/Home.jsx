import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Auth from "../components/Auth";
import Main from "../components/Main";
import Products from "../components/Products";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { getCart, setUserAuthenticated } from "../redux/userSlice";
import jwtDecode from "jwt-decode";

const Home = () => {
  const dispatch = useDispatch();
  const { cart, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated){
         dispatch(getCart());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("profile");
    if (token) {
      if (jwtDecode(token).exp < Date.now() / 1000) {
        localStorage.clear();
      }
      else{
        //user already authenticated
          dispatch(setUserAuthenticated(true));
      }
    }
  }, []);

  return (
    <div className="relative">
      <Main />
      <Cart title="Cart" cart={cart} />
      <Auth/>
      <Categories />
      <Products title="Products Overview" />
    </div>
  );
};

export default Home;
