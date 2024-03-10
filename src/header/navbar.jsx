import React, { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { logoTexto } from "../infos";
import './navbar.css'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div>
                <p className="titulo">{logoTexto}</p>
                <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
                    <div onClick={toggleMenu} className="list">
                    {menuOpen ? (
                            <BsXLg className="close-icon" />
                        ) : (
                            <BsList className="menu-icon" />
                        )}
                    </div>
                </nav>
                {menuOpen && (
                    <ul className="sidebar">
                        <BsXLg onClick={closeMenu} className={`close-icon`}/>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Sobre</a></li>
                        <li><a href="/portfolio">Projetos</a></li>
                        <li><a href="/contact">Contato</a></li>
                    </ul>
                )}
            </div>
        </header>
    )
}

export default NavBar;