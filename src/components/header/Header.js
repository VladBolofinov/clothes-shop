import './Header.scss'
import logo from '../../img/icons/logo.svg';
import userIcon from '../../img/icons/userIcon.svg';
import heartIcon from '../../img/icons/heartIcon.svg';
import lockIcon from '../../img/icons/lockIcon.svg';


const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='logo'/>
            <div className='menu'>
                <p>Женщины</p>
                <p>Мужчины</p>
                <p>Поиск</p>
            </div>
            <input/>
            <div className='language'>
                <p className="RU">RU</p>
                <p className="UA">UA</p>
                <p className="EN">EN</p>
            </div>
            <div className='userIcons'>
                <img src={userIcon} alt="userIcon"/>
                <img src={heartIcon} alt="heartIcon"/>
                <img src={lockIcon} alt="lockIcon"/>
            </div>
        </div>
    )
}

export default Header;