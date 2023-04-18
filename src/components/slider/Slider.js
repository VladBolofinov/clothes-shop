import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Slider.scss';
import slide1 from '../../img/background/slide1.png'
import FirstSlide from "./firstSlide/FirstSlide";
//import React, { useState } from 'react';

const Slider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <FirstSlide brandName='American Vintage'
                                nameHeader='Бренд'
                                brandLink='Смотреть коллекцию'/>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
