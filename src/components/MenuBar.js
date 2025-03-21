import { Link } from "react-router-dom";
import {
    HomeIcon,
    HeartIcon,
    PhoneIcon,
    InformationCircleIcon
} from "@heroicons/react/24/solid";
import "../styles/MenuBar.css";

function MenuBar({ appSize }) {
    return (
        <nav className="menu-container">
            <ul className="menu-list">
                <li>
                    <Link to="/" className="menu-link">
                        <HomeIcon className="menu-icon" />
                        {appSize !== "mobile" && <span className="menu-text">Home</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="menu-link">
                        <HeartIcon className="menu-icon" />
                        {appSize !== "mobile" && <span className="menu-text">Favorites</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="menu-link">
                        <PhoneIcon className="menu-icon" />
                        {appSize !== "mobile" && <span className="menu-text">Contact</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="menu-link">
                        <InformationCircleIcon className="menu-icon" />
                        {appSize !== "mobile" && <span className="menu-text">About</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { MenuBar };
