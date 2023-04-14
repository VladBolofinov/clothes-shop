import './Slider.scss';
import img1 from '../../img/background/slide1.png';
import img2 from '../../img/background/slide2.png';
//import React, { useState } from 'react';

const Slider = () => {
/*    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, imageUrl: 'image-1.jpg' },
        { id: 2, imageUrl: 'image-2.jpg' },
        { id: 3, imageUrl: 'image-3.jpg' },
    ];*/

/*    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };*/


    return (
        <div className="slider">
            <div className="sliderItem">
                <p>Бренд</p>
                <p>American Vintage</p>
                <p>Смотреть коллекцию</p>
            </div>
        </div>
    );
};

export default Slider;
