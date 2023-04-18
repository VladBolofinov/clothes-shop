import slide1 from '../../../img/background/slide1.png'
import './FirstSlide.scss';

const FirstSlide = ({brandName,nameHeader,brandLink}) => {
    return (
        <div className='wrapper-slide'>
            <p className='header-name'>{nameHeader}</p>
            <p className='brand-name'>{brandName}</p>
            <a className='brand-link' href=''>{brandLink}</a>
        </div>
    )
}
export default FirstSlide;