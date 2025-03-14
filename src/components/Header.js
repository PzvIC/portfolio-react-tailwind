import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">Portfolio</h1>
                <p className="header__subtitle">By: Carlos Palkovic</p>
            </div>
            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__item"><a href="#home" className="header__link">Home</a></li>
                    <li className="header__item"><a href="#about" className="header__link">About</a></li>
                    <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
