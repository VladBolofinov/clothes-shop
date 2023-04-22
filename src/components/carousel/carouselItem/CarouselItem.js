import './CarouselItem.scss';
import { popularProducts } from "../../../services/popularProductsData.js";

const CarouselItem = () => {
    return (
        <div>
            {popularProducts.map(item => {

            })}
            <div className='carousel-item-wrapper'>
                <img src={popularProducts[0].img} alt="shirt"/>
                <p className='item-name'>{popularProducts[0].name}</p>
                <p className='item-descr'>{popularProducts[0].type}</p>
                <p className='item-price'><span>{`${popularProducts[0].oldPrice} BYN`}</span>{` ${popularProducts[0].newPrice} BYN`}</p>
            </div>
        </div>
    )
}

export default CarouselItem;