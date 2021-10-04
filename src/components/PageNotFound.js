import { Link } from 'react-router-dom';
// import Portal from '../images/portal.png';
// import '../styles/layout/_notfoundpage.scss';

const NotFoundPage = () => {
  return (
    <div className=''>
      <p className=''>Página no encontrada. Vuelve por el portal </p>
      <Link to='/'>
        {/* <img
          className='notFoundPage'
          src={Portal}
          alt='Portal, volver a página de inicio'
        /> */}
      </Link>
    </div>
  );
};
export default NotFoundPage;
