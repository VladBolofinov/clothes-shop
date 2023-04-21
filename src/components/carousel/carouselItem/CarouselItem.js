import './CarouselItem.scss';
import { popularProducts } from "../../../services/popularProductsData.js";

const CarouselItem = () => {
    return (
        <div>
            {popularProducts.map(item => {

            })}
            <div className='carousel-item-wrapper'>
                <img src={popularProducts[0].img} alt="shirt"/>
                <p className='item-name'>Replay</p>
                <p className='item-descr'>Classic shoes</p>
                <p className='item-price'><span>61 BYN</span> 38 BYN</p>
            </div>
        </div>
    )
}

export default CarouselItem;