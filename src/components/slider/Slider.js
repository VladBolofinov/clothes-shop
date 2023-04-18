import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.scss';
import Slide from "./Slide/Slide";

const Slider = () => {

    const slides = [
        {brandName: 'American Vintage', nameHeader: 'Бренд', brandLink: 'Смотреть коллекцию', className: 'wrapper-slide first-slide'},
        {brandName: 'George Gina Lucy', nameHeader: 'Бренд', brandLink: 'Смотреть коллекцию', className: 'wrapper-slide second-slide'},
        {brandName: 'Deha', nameHeader: 'Бренд', brandLink: 'Смотреть коллекцию', className: 'wrapper-slide third-slide'},
        {brandName: 'Deha', nameHeader: 'Бренд', brandLink: 'Смотреть коллекцию', className: 'wrapper-slide fourth-slide'}
    ];

    const renderedSlides = slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <Slide {...slide} />
        </SwiperSlide>
    ));

    return (
            <Swiper
                spaceBetween={30}
                pagination={{clickable: true,}}
                modules={[Pagination]}
                className="mySwiper">

                {renderedSlides}

            </Swiper>
    );
};

export default Slider;
