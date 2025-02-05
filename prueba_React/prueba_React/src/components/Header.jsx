const Header = () => {
    return (
    <header className="header">
        <img src="logo.png" alt="Logo de la empresa" className="logo" />
        <nav>
        <ul className="nav-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        </nav>
    </header>
    );
};

export { Header };