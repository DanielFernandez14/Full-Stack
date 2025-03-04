import { useState } from "react";
import "./Contacto.css";
import { Layout } from "../../components/Layout/Layout";

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ nombre, email, consulta, mensaje });
        setMensajeEnviado(true);

        setNombre("");
        setEmail("");
        setConsulta("");
        setMensaje("");

    };

    return (
        <Layout>
            <div className="contacto-container">
                <h1 className="contacto-titulo">Contactanos</h1>

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

                {mensajeEnviado && formData && (
                    <div className="popup" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-light)' }}>
                        <div className="popup-content">
                            <h2>Información Enviada</h2>
                            <p><strong>Nombre:</strong> {formData.nombre}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Consulta:</strong> {formData.consulta}</p>
                            <p><strong>Mensaje:</strong> {formData.mensaje}</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export { Contacto };
