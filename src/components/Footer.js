import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer({ appSize }) {
  return (
    <footer className={`footer footer__${appSize}`}>
      {appSize !== 'mobile' && <h1 className="footer-title">Portfolio</h1>}

      <ul className={`footer-list footer-list__${appSize}`}>
        <li>
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="footer-link">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
