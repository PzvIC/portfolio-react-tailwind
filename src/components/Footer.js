import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <h1 className="footer-title">Portfolio</h1>
            <ul className="footer-list">
                <li>
                    <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="footer-link">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </li>
                <li>
                    <Link to="/faq" className="footer-link">FAQ</Link>
                </li>
            </ul>
        </footer>
    );
}

export { Footer };
