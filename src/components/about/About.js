import './About.scss';
import logo from '../../img/items/logo-span.png';
import aboutImg from '../../img/items/about-img.png';
const About = () => {
    return (
        <div className='about-wrapper'>
            <div className="block">
                <span>
                    <img className='block-logo' src={logo} alt="logo"/>
                </span>
            </div>
            <div className='about'>
                <h2 className='about-header'>О<br/>Нас</h2>
                <p className='about-descr'>We offer a wide range of stylish and high-quality women's clothing for any taste and size. Our team of professionals carefully selects collections from the best global brands and designers to offer you only the best.
                    We take pride not only in the quality of our products but also in providing excellent customer service. Our goal is to help you find an outfit in which you will feel confident and look fabulous.
                    We keep up-to-date with the latest fashion trends and novelties to offer you current collections and options for any occasion. You can find dresses, blouses, skirts, pants, jeans, suits, and more - everything you need to create the perfect look.
                    Stay in the know with the latest fashion trends and update your wardrobe with our online store. We are confident that you will find something to your liking here. Thank you for choosing us!</p>
                <img src={aboutImg} alt="girl" className="about-img"/>
            </div>
        </div>
    )
}
export default About;