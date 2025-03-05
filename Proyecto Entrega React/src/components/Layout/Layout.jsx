import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
            <Link to="/">
                <img className="imgHeader" src="Fav Icon.jpeg" alt="Logo" />
            </Link>
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <nav className={menuOpen ? "nav-open" : ""}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}><i className='bx bx-home bx-tada' ></i> - Home</Link></li>
                        <li><Link to="/ApiTest" onClick={() => setMenuOpen(false)}> <i className='bx bx-test-tube bx-tada' ></i> - ApiTest RyM</Link></li>
                        <li><Link to="/Contacto" onClick={() => setMenuOpen(false)}> <i className='bx bxs-contact bx-tada' ></i> - Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{props.children}</main>
            <footer className="footer_class">
                <p>© 2025 - Sitio desarrollado por Daniel Matias Fernández</p>
                <div className="footer_links">
                    <a href="https://github.com/DanielFernandez14" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github bx-tada' ></i> GitHub</a>
                    <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin bx-tada' ></i> LinkedIn</a>
                    <Link to="/Contacto"><i className='bx bxs-contact bx-tada' ></i> Contacto</Link>
                </div>
            </footer>
        </>
    );
};

export { Layout };
