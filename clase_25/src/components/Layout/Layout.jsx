import './Layout.css'

const Layout = (props) => {
    return (
        <>

        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702" alt="imagen de logo" />
            <nav>
                <ul>
                    <li><a href="/"></a>Home</li>
                    <li><a href="/perro aleatorio"></a>Perro Aleatorio</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>CONTENIDO DINAMICO DE CADA PAGINA</h2>
        </main>
        <footer>
            <p>Sitio desarrollado por Daniel Fernandez</p>
        </footer>
        
        </>
    )
    return Layout
}

export default Layout;




