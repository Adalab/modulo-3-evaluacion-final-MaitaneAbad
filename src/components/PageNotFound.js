import { Link } from 'react-router-dom';
import Portal from '../images/portalJodete.png';
import '../styles/layout/pageNotFound.scss';

const NotFoundPage = () => {
  return (
    <div className='titlePageNotFound'>
      <p>Página no encontrada. Vuelve por el portal</p>

      <Link to='/'>
        <img
          className='pageNotFound'
          src={Portal}
          alt='Portal, volver a página de inicio'
        />
      </Link>
    </div>
  );
};
export default NotFoundPage;
