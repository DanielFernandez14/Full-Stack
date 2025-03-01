import "./Layout.css"

const Layout = () => {
    return (
        <>
            <header>
                <img className="imgHeader" src="Fav Icon.jpeg" alt="Logo" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Random Dog</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2>Contenido dinamico de cada pagina</h2>
            </main>
            <footer>Sitio desarrollado por Danco Web</footer>
        </>
    )
}
export { Layout }