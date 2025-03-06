import { useState, useEffect } from "react";
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

    useEffect(() => {
        if (mensajeEnviado) {
            const timer = setTimeout(() => {
                setMensajeEnviado(false);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [mensajeEnviado]);

    return (
        <Layout>
            <div className="contacto-container">
                <h1 className="contacto-titulo">Contactanos</h1>

                {mensajeEnviado && (
                    <div className="mensaje-exito">
                        Te contactamos lo antes posible
                    </div>
                )}
                
                <form 
                    className="contacto-form" 
                    onSubmit={handleSubmit} 
                    action="https://formsubmit.co/daniel.mfernandez1999@gmail.com" 
                    method="POST"
                >
                    <input type="hidden" name="_next" value="" />
                    <input type="hidden" name="_captcha" value="false" />

                    <label htmlFor="nombre">Nombre y Apellido:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="message" 
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
                        name="consulta"
                        value={consulta} 
                        onChange={(e) => setConsulta(e.target.value)} 
                        required
                    >
                        <option value="">Elija una opción</option>
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

                    <button type="submit" className="btn-enviar"> <i className='bx bx-mail-send bx-tada' ></i> Enviar</button>
                </form>

                {mensajeEnviado && formData && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>Información Enviada</h2>
                            <p><strong>Nombre y Apellido:</strong> {formData.nombre}</p>
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