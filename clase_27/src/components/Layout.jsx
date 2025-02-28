import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

const Layout = ({ children }) => {
    return (
    <>
        <header className="navbar is-dark">
        <div>
            <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white">
                Home
            </Link>
            <Link to="/admin" className="navbar-item has-text-white">
                Dashboard
            </Link>
            </div>
        </div>
        </header>
        <main className="">
        <div>{children}</div>
        </main>
        <footer>
        </footer>
    </>
    );
};

export { Layout };