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
   <SwiperSlide>
    <div className="slide" style={{background:`url(${img}) no-repeat center center/cover`}}>
        <div className="flex flex-col justify-start items-start">
                <h1 className={`h-sub text-[14px] sm:text-[22px]
                text-textPrimary ${styles.textSub}`}>{title}</h1>
                <p className="h-main text-[30px] sm:text-[60px] leading-12 capitalize text-textPrimary font-serif">{subtitle}</p>
                <button className="shop-now">Shop Now</button>
          </div>
    </div>
  </SwiperSlide>
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

    setTimeout(() => {
            handleClick('next');
    },3000);
 

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


      {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}


        


    </div>
  );
};

export default Home;

// typography remaining
