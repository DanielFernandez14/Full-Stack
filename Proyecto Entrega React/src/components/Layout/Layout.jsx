import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <img className="imgHeader" src="Fav Icon.jpeg" alt="Logo" />
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <nav className={menuOpen ? "nav-open" : ""}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/ApiTest" onClick={() => setMenuOpen(false)}>ApiTest</Link></li>
                        <li><Link to="/Contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{props.children}</main>
            <footer className="footer_class">
                <p>© 2025 - Sitio desarrollado por Daniel Fernández</p>
                <div className="footer_links">
                    <a href="https://github.com/DanielFernandez14" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <Link to="/Contacto">Contacto</Link>
                </div>
            </footer>
        </>
    );
};

export { Layout };
