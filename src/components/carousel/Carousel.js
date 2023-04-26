import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { popularProducts } from "../../services/popularProductsData.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Carousel.scss';

const Carousel = () => {
    const renderItems = useMemo(() => {
        return popularProducts.map(item => (
            <SwiperSlide>
                    <div className='carousel-item-wrapper'>
                        <img src={item.img} alt="shirt"/>
                        <p className='item-name'>{item.name}</p>
                        <p className='item-descr'>{item.type}</p>
                        <p className='item-price'>
                            <span>{`${item.oldPrice} BYN`}</span>{` ${item.newPrice} BYN`}
                        </p>
                    </div>
            </SwiperSlide>
        ))
    }, [popularProducts])

    return (
        <div className='carousel-wrapper'>
            <h1 className='carousel-header'>Популярное</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {renderItems}
            </Swiper>
        </div>
    );
}

export default Carousel;