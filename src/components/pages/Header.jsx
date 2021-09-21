import React from 'react'

const Header = () => {
    return (
        <>
          <header className="l-header text-light bg-dark">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo text-light h3">Firoj Ahmed</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link text-light active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link text-light">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link text-light">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link text-light">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link text-light">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu text-light'></i>
                </div>
            </nav>
          </header>
        </>
    )
}

export default Header
