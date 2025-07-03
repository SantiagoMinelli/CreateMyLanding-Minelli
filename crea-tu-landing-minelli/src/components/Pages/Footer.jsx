import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {
    const whatsappNumber = ''; 
    const whatsappMessage = 'Hola, me gustaría obtener más información sobre sus productos'; // Mensaje predeterminado

    return (
    <footer className="footer-container">
        <div className="footer-content">
        <div className="footer-brand">
            <h3>Buenas Cosas</h3>
            <p>©{new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
        
        <div className="footer-social">
            <a 
            href="https://www.instagram.com/buenascosassintacc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram de Buenas Cosas">
            <FaInstagram className="social-icon" />
            <span>Síguenos</span>
            </a>
            <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link whatsapp-link"
            aria-label="Contactar por WhatsApp">
            <FaWhatsapp className="social-icon" />
            <span>Contáctanos</span>
            </a>
        </div>
        </div>
    </footer>
    );
}

export default Footer;