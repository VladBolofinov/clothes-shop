import './Footer.scss';
const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <h2 className='footer-header'>Будьте в курсе событий</h2>
            <form action="#">
                <input className='first-input' type="text" name="firstname" defaultValue="" />
                <button type="submit"><img alt="Submit"></img></button>
            </form>
        </footer>
    )
}

export default Footer;