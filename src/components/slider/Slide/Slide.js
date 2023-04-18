import './Slide.scss';

const Slide = ({brandName,nameHeader,brandLink,className}) => {
    return (
        <div className={className}>
            <div className='wrapper-text'>
                <p className='header-name'>{nameHeader}</p>
                <p className='brand-name'>{brandName}</p>
                <a className='brand-link' href=''>{brandLink}</a>
            </div>
        </div>
    )
}
export default Slide;