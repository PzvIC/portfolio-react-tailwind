import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';
import {
  HomeIcon,
  HeartIcon,
  PhoneIcon,
  InformationCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import '../styles/MenuBar.css';

function MenuBar({ appSize }) {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const listClass = `menu-list ${
    appSize === 'desktop' ? 'menu-list-desktop' : 'menu-list-compact'
  }`;

  return (
    <nav className="menu-container">
      <div className="menu-content">
        <ul className={listClass}>
          <li>
            <Link to="/" className="menu-link">
              <HomeIcon className="menu-icon" />
              {appSize !== 'mobile' && <span className="menu-text">Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="menu-link">
              <HeartIcon className="menu-icon" />
              {appSize !== 'mobile' && <span className="menu-text">Favorites</span>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link">
              <PhoneIcon className="menu-icon" />
              {appSize !== 'mobile' && <span className="menu-text">Contact</span>}
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu-link">
              <InformationCircleIcon className="menu-icon" />
              {appSize !== 'mobile' && <span className="menu-text">About</span>}
            </Link>
          </li>
        </ul>

        <div className="menu-toggle">
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`toggle-switch ${darkMode ? 'switch-on' : 'switch-off'}`}
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span className={`toggle-thumb ${darkMode ? 'thumb-on' : 'thumb-off'}`} />
          </Switch>
          {darkMode ? (
            <MoonIcon className="toggle-icon-lg" />
          ) : (
            <SunIcon className="toggle-icon-lg" />
          )}
        </div>
      </div>
    </nav>
  );
}

export { MenuBar };
