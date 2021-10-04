import '../styles/layout/footer.scss';
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <p className='name'> &copy; Maitane Abad Conde </p>
        <p className='subtitle'>Evaluación Final React.js</p>
        <a
          className='link'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Adalab/modulo-3-evaluacion-final-MaitaneAbad'
        >
          {' '}
          Github <i className='fab fa-github-alt'></i>
        </a>
      </footer>
    </>
  );
};

export default Footer;
