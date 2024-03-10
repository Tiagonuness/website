import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoTexto } from "../infos";
import './navbar.css'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div>
                <nav>
                    <p className="titulo">{logoTexto}</p>
                    <div onClick={toggleMenu} className="list">
                        <BsList/>
                    </div>
                    {menuOpen && (
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default NavBar;