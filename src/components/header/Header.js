import './Header.scss'
import logo from '../../img/icons/logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo}/>
            <div className='menu'>
                <p>Женщины</p>
                <p>Мужчины</p>
                <p>Поиск</p>
            </div>
            <input/>
        </div>
    )
}

export default Header;