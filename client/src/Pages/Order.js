import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Auth from "../components/Auth";
import Cart from "../components/Cart";
import moment from 'moment';

import { useParams } from "react-router-dom";
import { getCurrOrder } from "../redux/userSlice";

const OrderCard = ({ _id, name, img, price, qty }) => {
    return (
      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img className="w-full hidden md:block" src={img} alt="dress" />
          <img className="w-full md:hidden" src={img} alt="dress" />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-lg font-semibold leading-6">
            <Link
              to={`/products/${_id}`}
              className="cursor-pointer text-decoration-none text-gray-800"
            >
                {name}
            </Link>
              </h3>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-base xl:text-lg leading-6 text-gray-800">{qty}</p>
            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
              ₹{price * qty}
            </p>
          </div>
        </div>
      </div>
    );
  };

const Order = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const {currOrderId,orderDate,currOrder,shippingFee,orderFee} = useSelector((state) => state.user);
  
  
    useEffect(() => {
        dispatch(getCurrOrder(id));
    }, [dispatch,id]);
    
  return (
    <div className="py-32 lg:py-28 px-16 md:px-12  2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  inline-block text-gray-800">
              Thank You For your order  <p className="text-sm inline-block">Order ID : {currOrderId?.slice(currOrderId.length-9,currOrderId.length)}</p>
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          {moment(orderDate).format('Do MMMM YYYY [at] h:mm A')}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Order Details 
            </p>
            {currOrder?.map((item) => (
              <OrderCard key={item._id} {...item} />
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">₹{orderFee}</p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">
                    ₹{shippingFee}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  ₹{orderFee + shippingFee}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 w-full  xl:w-1/3 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            User Details
          </h3>
          <div className="flex flex-col md:flex-row xl:flex-col justify-start w-full  items-stretch h-full  md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <img
                  src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  alt="avatar"
                />
                  <p className="text-base font-semibold leading-4 text-left text-gray-800">
                    {user?.name}
                  </p>
              </div>

              <div className="flex items-center justify-center xl:justify-start  space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="cursor-pointer my-auto text-sm leading-5 text-gray-800">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch  flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start  ">
                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 mt-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Shipping Address
                  </p>
                  <p className=" md:text-left text-sm leading-5 text-gray-600">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div className=" flex flex-col sm:flex-row  xl:flex-col gap-2  items-center md:justify-start md:items-start">
                <button className="mt-4 md:mt-0 py-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-full  text-base leading-4 text-gray-800">
                  Edit Details
                </button>
                <Link to="/home" className="w-full">
                  <button className="mt-4 md:mt-0 py-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium  w-full  text-base leading-4 text-gray-800">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart title="Cart"/>
      <Auth />
    </div>
  )
}

export default Order;