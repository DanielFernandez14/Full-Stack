import { Layout } from "../../components/Layout/Layout"
import "./Home.css"

const Home = () => (
    <Layout>
        <div className="home">
        <h1 className="home__title"><i className='bx bxs-component'></i> - Danco Web Service:  Transformando tus ideas en realidad digital - <i className='bx bxs-component'></i></h1>
        <p className="home__intro">Danco Web Service, una pequeña pero apasionada empresa dedicada al <strong>desarrollo web</strong>. Desde la creación de atractivas <strong>páginas web</strong> hasta la implementación de completas <strong>tiendas en línea (e-commerce)</strong>, nuestro objetivo es llevar tus proyectos digitales al siguiente nivel.</p>

        <div className="home__grid">
        <section className="home__section">
        <h2 className="home__subtitle">¿Quiénes somos?<i className='bx bxl-stack-overflow bx-flashing' ></i></h2>
        <p className="home__text">Fundada con el propósito de ofrecer soluciones web innovadoras y personalizadas, Danco Web Service se especializa en brindar una experiencia única a cada cliente. Nuestro equipo de talentosos desarrolladores y diseñadores trabaja de manera conjunta para asegurar que cada proyecto cumpla con los más altos estándares de calidad y funcionalidad.</p>
        </section>

        <section className="home__section">
            <h2 className="home__subtitle">Nuestros servicios<i className='bx bxl-visual-studio bx-flashing' ></i></h2>
            <ul className="home__list">
            <li className="home__list-item"><strong><i className='bx bx-code-block bx-burst bx-flip-vertical' ></i> - Desarrollo Web</strong>: Desde sitios web corporativos hasta blogs personales, creamos páginas web que no solo destacan por su diseño, sino también por su rendimiento y seguridad.</li>
            <li className="home__list-item"><strong><i className='bx bx-cart-alt bx-burst' ></i> - E-commerce</strong> : Diseñamos y desarrollamos plataformas de comercio electrónico que facilitan la experiencia de compra en línea, optimizando procesos y garantizando una interfaz amigable.</li>
            <li className="home__list-item"><strong><i className='bx bxl-react bx-flip-horizontal bx-burst' ></i> - Páginas Web</strong>: Personalizamos cada proyecto para reflejar la esencia y objetivos de tu marca, asegurándonos de que tu presencia en línea sea tan única como tu negocio.</li>
            </ul>
        </section>

        <section className="home__section">
            <h2 className="home__subtitle">¿Por qué elegirnos? <i className='bx bx-terminal bx-flashing' ></i></h2>
            <p className="home__text"><strong>Experiencia</strong>: Contamos con años de experiencia en el desarrollo web y e-commerce, lo que nos permite ofrecer soluciones efectivas y vanguardistas.</p>
            <p className="home__text"><strong>Personalización</strong>: Creemos en la importancia de entender las necesidades específicas de cada cliente, adaptando nuestras soluciones para cumplir con sus expectativas.</p>
            <p className="home__text"><strong>Compromiso</strong>: Nos apasiona lo que hacemos y estamos comprometidos a superar las expectativas de nuestros clientes, entregando proyectos a tiempo y dentro del presupuesto.</p>
        </section>
        </div>

        <p className="home__conclusion">En <strong> <i className='bx bx-registered bx-tada' ></i>Danco Web Service</strong>, tu visión es nuestra misión. Déjanos ayudarte a transformar tus ideas en realidad digital y llevar tu negocio al éxito en el mundo en línea.</p>
    </div>
    </Layout>
);
export { Home }