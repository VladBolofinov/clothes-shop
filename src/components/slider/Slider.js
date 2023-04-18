import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Slider.scss';
import Slide from "./Slide/Slide";

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
                    <Slide brandName='American Vintage'
                           nameHeader='Бренд'
                           brandLink='Смотреть коллекцию'
                           className='wrapper-slide first-slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide brandName='George Gina Lucy'
                           nameHeader='Бренд'
                           brandLink='Смотреть коллекцию'
                           className='wrapper-slide second-slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide brandName='Deha'
                           nameHeader='Бренд'
                           brandLink='Смотреть коллекцию'
                           className='wrapper-slide third-slide'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide brandName='Deha'
                           nameHeader='Бренд'
                           brandLink='Смотреть коллекцию'
                           className='wrapper-slide fourth-slide'/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
