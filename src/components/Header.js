import logo from '../images/Rick_Morty.png';
import '../styles/layout/header.scss';
const Header = () => {
  return (
    <header className='header'>
      <img
        className='logo'
        src={logo}
        title='Rick y Morty'
        alt='Rick y Morty'
      />
    </header>
  );
};
export default Header;
