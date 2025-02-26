import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { getServices } from "../services/service";


const Home = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        // Simulando carga de datos
        setServicios([
            { id: 1, titulo: "Análisis de Vulnerabilidades", descripcion: "Identificamos posibles riesgos en tu sistema.", icono: "fas fa-search", color: "has-background-white" },
            { id: 2, titulo: "Protección de Redes", descripcion: "Garantizamos la seguridad de tu infraestructura.", icono: "fas fa-network-wired", color: "has-background-light" },
            { id: 3, titulo: "Monitorización 24/7", descripcion: "Supervisión constante para detectar amenazas.", icono: "fas fa-eye", color: "has-background-white" },
        ]);
    }, []);

// Cargar los servicios desde Firebase al montar el componente
useEffect(() => {
    const fetchServices = async () => {
    const data = await getServices();
    setServicios(data);
    };
    fetchServices();
}, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="hero is-medium hero-section">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 cyber-title">Protegemos tu empresa contra amenazas</h1>
                        <p className="subtitle is-4 cyber-subtitle">
                            Seguridad avanzada para blindar tus sistemas contra ciberataques.
                        </p>
                        <p className="subtitle is-5 cyber-subtitle">
                            Ofrecemos soluciones de defensa proactiva, monitoreo en tiempo real y análisis de vulnerabilidades.
                        </p>
                        <a className="button cyber-button mt-4">Descubrir más</a>
                    </div>
                </div>
            </section>

            <style>
                {`
                .hero-section {
                    position: relative;
                    background: url("/images/cyber-background.jpg") no-repeat center center/cover;
                    overflow: hidden;
                }

                .hero-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgb(22,17,120);
                    background: linear-gradient(180deg, rgba(22,17,120,1) 24%, rgba(10,15,36,1) 62%);
                    z-index: 1;
                }

                .cyber-title {
                    color: #00d4ff;
                    text-shadow: 0px 0px 15px rgba(0, 212, 255, 0.7);
                    text-transform: uppercase;
                    font-weight: bold;
                    position: relative;
                    z-index: 2;
                }

                .cyber-subtitle {
                    color: #d1d1d1;
                    max-width: 700px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .cyber-button {
                    background: linear-gradient(90deg, #00ff99, #00d4ff);
                    color: #fff;
                    font-weight: bold;
                    text-transform: uppercase;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    box-shadow: 0px 0px 10px rgba(0, 255, 153, 0.5);
                    position: relative;
                    z-index: 2;
                }

                .cyber-button:hover {
                    background: linear-gradient(90deg, #00d4ff, #00ff99);
                    transform: scale(1.05);
                    box-shadow: 0px 0px 20px rgba(0, 255, 153, 0.7);
                }
                `}
            </style>
            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card feature-card">
                                <div className="card-content has-text-centered">
                                    <span className="icon is-large">
                                        <i className="fas fa-bolt fa-3x" style={{ color: "#facc15" }}></i>
                                    </span>
                                    <h2 className="title is-4" style={{ color: "#facc15" }}>Rápido y Eficiente</h2>
                                    <p>Optimizado para ofrecerte la mejor velocidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card feature-card">
                                <div className="card-content has-text-centered">
                                    <span className="icon is-large">
                                        <i className="fas fa-lock fa-3x" style={{ color: "#00c896" }}></i>
                                    </span>
                                    <h2 className="title is-4" style={{ color: "#00c896" }}>Seguro y Confiable</h2>
                                    <p>Protegemos tus datos con la mejor seguridad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card feature-card">
                                <div className="card-content has-text-centered">
                                    <span className="icon is-large">
                                        <i className="fas fa-user-friends fa-3x" style={{ color: "#007bff" }}></i>
                                    </span>
                                    <h2 className="title is-4" style={{ color: "#007bff" }}>Fácil de Usar</h2>
                                    <p>Una interfaz intuitiva para una mejor experiencia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
                /* Fondo animado para mayor impacto visual */
                .features-section {
                    position: relative;
                    background: url("/images/cyber-glow.jpg") no-repeat center center/cover;
                    overflow: hidden;
                }

                .features-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #0a0f24b3;
                }

                /* Tarjetas de características con animaciones sutiles */
                .feature-card {
                    background-color: rgba(18, 23, 45, 0.9);
                    border: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    z-index: 2;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 20px rgba(0, 255, 153, 0.3);
                }
                `}
            </style>

            {/* Servicios Section */}
            <section className="section services-section">
                <div className="container">
                    <h2 className="title is-3 has-text-centered" style={{ color: "#00c896" }}>Nuestros Servicios</h2>
                    <div className="columns is-multiline">
                        {servicios.length > 0 ? (
                            servicios.map((servicio) => (
                                <div key={servicio.id} className="column is-4">
                                    <div className="card service-card">
                                        <div className="card-content has-text-centered">
                                            <span className="icon is-large">
                                                <i className={`${servicio.icono} fa-3x`} style={{ color: servicio.color }}></i>
                                            </span>
                                            <h3 className="title is-4" style={{ color: servicio.color }}>{servicio.titulo}</h3>
                                            <p>{servicio.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="has-text-centered">Cargando servicios...</p>
                        )}
                    </div>
                </div>
            </section>

            <style>
                {`
                /* Fondo animado de redes de datos */
                .services-section {
                    position: relative;
                    background: url("/images/cyber-network.jpg") no-repeat center center/cover;
                    overflow: hidden;
                    padding: 4rem 0;
                }

                .services-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(10, 15, 36, 0.85);
                }

                /* Tarjetas de servicios con efecto interactivo */
                .service-card {
                    background-color: rgba(18, 23, 45, 0.95);
                    border: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    z-index: 2;
                }

                .service-card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 12px 24px rgba(0, 255, 153, 0.4);
                }

                /* Animación de partículas flotantes en servicios */
                .services-section::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("/images/particles.svg") repeat;
                    opacity: 0.1;
                    animation: moveParticles 30s linear infinite;
                }

                @keyframes moveParticles {
                    0% { background-position: 0 0; }
                    100% { background-position: 200px 200px; }
                }
                `}
            </style>

            {/* Call to Action */}
            <section className="section cta-section">
                <div className="container has-text-centered">
                    <h2 className="title is-3 cta-title">¿Listo para blindar tu empresa contra ciberataques?</h2>
                    <p className="subtitle is-5 cta-subtitle">
                        Contamos con un equipo experto en ciberseguridad para proteger tus datos, 
                        infraestructura y operaciones críticas. No esperes a ser víctima de un ataque.
                    </p>
                    <p className="subtitle is-6 cta-subtitle">
                        Asesoría 100% personalizada y estrategias de defensa a la medida de tu empresa.
                    </p>
                    <a className="button cta-button mt-4">Solicitar Asesoría</a>
                </div>
            </section>

            <style>
                {`
                /* Fondo animado con líneas digitales */
                .cta-section {
                    position: relative;
                    background: rgb(10,15,36);
background: linear-gradient(180deg, rgba(10,15,36,1) 20%, rgba(19,17,100,1) 42%, rgba(12,15,50,1) 58%, rgba(10,15,36,1) 100%);
                    
                    overflow: hidden;
                    padding: 4rem 0;
                }

                .cta-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgb(10,15,36);
background: linear-gradient(180deg, rgba(10,15,36,1) 20%, rgba(19,17,100,1) 42%, rgba(12,15,50,1) 58%, rgba(10,15,36,1) 100%);
                    opacity: 0.4;
                    z-index: 1;
                }

                .cta-section::after {
                    content: "";
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    background: rgb(10,15,36);
background: linear-gradient(180deg, rgba(10,15,36,1) 20%, rgba(19,17,100,1) 42%, rgba(12,15,50,1) 58%, rgba(10,15,36,1) 100%);
                    animation: glow-effect 6s infinite alternate;
                    z-index: 1;
                }

                @keyframes glow-effect {
                    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
                    100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.5; }
                }

                /* Líneas animadas en el fondo */
                .cta-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("/images/digital-lines.svg") repeat;
                    opacity: 0.2;
                    animation: moveLines 12s linear infinite;
                }

                @keyframes moveLines {
                    0% { background-position: 0 0; }
                    100% { background-position: 300px 300px; }
                }

                /* Estilos del texto */
                .cta-title {
                    color: #00e6ff;
                    text-shadow: 0px 0px 15px rgba(0, 229, 255, 0.6);
                    font-weight: bold;
                    text-transform: uppercase;
                    z-index: 2;
                    position: relative;
                }

                .cta-subtitle {
                    color: #d1d1d1;
                    max-width: 700px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                /* Botón profesional con efectos */
                .cta-button {
                    background: linear-gradient(90deg, #00ff99, #00d4ff);
                    color: #fff;
                    font-weight: bold;
                    text-transform: uppercase;
                    padding: 14px 28px;
                    border: none;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    box-shadow: 0px 0px 12px rgba(0, 255, 153, 0.6);
                    position: relative;
                    z-index: 2;
                }

                .cta-button:hover {
                    background: linear-gradient(90deg, #00d4ff, #00ff99);
                    transform: scale(1.07);
                    box-shadow: 0px 0px 20px rgba(0, 255, 153, 0.8);
                }
                `}
            </style>
            {/* Footer */}
            <footer className="footer-section">
                <div className="container has-text-centered">
                    <h2 className="footer-title">DanoDev Security</h2>
                    <p className="footer-subtitle">Protegiendo tu empresa con tecnología de vanguardia.</p>
                    
                    <div className="footer-links">
                        <a href="#" className="footer-link">Servicios</a>
                        <a href="#" className="footer-link">Nosotros</a>
                        <a href="#" className="footer-link">Contacto</a>
                        <a href="#" className="footer-link">Blog</a>
                    </div>

                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>

                    <p className="footer-text">© 2025 DanoDev Security. Todos los derechos reservados por DanoDev.</p>
                </div>
            </footer>

            <style>
                {`
                /* Estilos del footer */
                .footer-section {
                    background: #0a0f24;
                    padding: 3rem 0;
                    color: #d1d1d1;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .footer-title {
                    color: #00e6ff;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    text-shadow: 0px 0px 12px rgba(0, 230, 255, 0.7);
                }

                .footer-subtitle {
                    font-size: 1rem;
                    max-width: 600px;
                    margin: 0 auto 1.5rem;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .footer-link {
                    color: #00e6ff;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s;
                }

                .footer-link:hover {
                    color: #00ff99;
                }

                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .social-icon {
                    color: #00e6ff;
                    font-size: 1.5rem;
                    transition: transform 0.3s, color 0.3s;
                }

                .social-icon:hover {
                    transform: scale(1.2);
                    color: #00ff99;
                }

                .footer-text {
                    font-size: 0.85rem;
                    opacity: 0.7;
                }
                `}
            </style>

</Layout>
    );
};

export { Home };

