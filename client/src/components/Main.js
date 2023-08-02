import React, { useEffect, useState } from "react";
import { slider } from "../constants";
import "./Main.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { styles } from "../styles";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = ({img,title,subtitle}) => {
  return (
    <div className="slide relative" style={{background:`url(${img}) no-repeat center center/cover`}}>
        <div className="flex flex-col justify-start items-start absolute left-12  md:relative ">
                <h1 className={`h-sub text-[17px] w-full
                text-textPrimary ${styles.textSub}`}>{title}</h1>
                <p className="h-main text-[45px] sm:text-[60px] leading-0 capitalize text-textPrimary font-serif">{subtitle}</p>
                <button className="shop-now sm:p-2">Shop Now</button>
          </div>
    </div>
  )
}


const Home = () => {

  const [slideInd,setSlideInd] = useState(0);

  const handleClick = (mode) => {
    const slider = document.querySelector('.slider');
    if(mode === "prev")   setSlideInd(slideInd > 0 ? slideInd-1 :2);
    else  setSlideInd(slideInd < 2 ? slideInd+1 :0);
    if(slider){
      slider.style.transform = `translateX(-${slideInd * 100}vw)`;
    }

  }

    // setTimeout(() => {
    //         handleClick('next');
    // },3000);
 

  return (
    <div className="h-screen overflow-hidden home relative border-2">
      <div className="arrow left-arrow">
        <ArrowLeftOutlined onClick = {() => handleClick("prev")}/>
      </div>
      <div className="arrow right-arrow">
        <ArrowRightOutlined onClick = {() => handleClick("next")}/>
      </div>



      <div className="slider">
          {slider.map((slide,i) => { 
            return <Slide  key={i}  img = {slide.img} title = {slide.title} subtitle = {slide.subtitile}  />
          })}
      </div>
    </div>
  );
};

export default Home;

// typography remaining
