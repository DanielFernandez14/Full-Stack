import { useState } from "react";
import "./Contacto.css";
import { Layout } from "../../components/Layout/Layout";

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensajeEnviado(true);

        setNombre("");
        setEmail("");
        setConsulta("");
        setMensaje("");

        setTimeout(() => setMensajeEnviado(false), 4000);
    };

    return (
        <Layout>
            <div className="contacto-container">
                <h1 className="contacto-titulo">Contáctanos</h1>

                {mensajeEnviado && (
                    <div className="mensaje-exito">
                        Consulta enviada con éxito, contestaremos lo antes posible.
                    </div>
                )}

                <form className="contacto-form" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                    <label htmlFor="consulta">Tipo de Consulta:</label>
                    <select 
                        id="consulta" 
                        value={consulta} 
                        onChange={(e) => setConsulta(e.target.value)} 
                        required
                    >
                        <option value="">...</option>
                        <option value="sitio-web">Sitio Web</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="portfolio">Porfolio Web Profesional</option>
                        <option value="sistemas">Sistemas Integrales</option>
                        <option value="asesoria">Asesoría Web</option>
                        <option value="trabajo">Quiero trabajar con ustedes</option>
                    </select>

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea 
                        id="mensaje" 
                        name="mensaje" 
                        rows="4" 
                        value={mensaje} 
                        onChange={(e) => setMensaje(e.target.value)} 
                        required
                    ></textarea>

                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </div>
        </Layout>
    );
};

export { Contacto };
