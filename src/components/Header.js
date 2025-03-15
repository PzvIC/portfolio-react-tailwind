import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import "../styles/Header.css";

function Header({ setAppSize, appSize, setManualOverride }) {

    const changeAppSize = (size) => {
        setAppSize(size)
        setManualOverride(false)
    }

    return (
        <header className={`header ${appSize === "mobile" ? "header--mobile" : ""}`}>
            <div className="header__content">
                <h1 className="header__title">Portfolio</h1>
                <p className="header__subtitle">By: Carlos Palkovic</p>
            </div>

            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__item">
                        <button onClick={() => changeAppSize("desktop")} className="header__link group relative">
                            <ComputerDesktopIcon className="header__icon" />
                            <span className="tooltip">Desktop</span>
                        </button>
                    </li>
                    <li className="header__item">
                        <button onClick={() => changeAppSize("tablet")} className="header__link group relative">
                            <DeviceTabletIcon className="header__icon" />
                            <span className="tooltip">Tablet</span>
                        </button>
                    </li>
                    <li className="header__item">
                        <button onClick={() => changeAppSize("mobile")} className="header__link group relative">
                            <DevicePhoneMobileIcon className="header__icon" />
                            <span className="tooltip">Mobile</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
