import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const contact = () =>{
        window.location = 'https://api.whatsapp.com/send?phone=573104027113&text=%F0%9F%98%83%20%C2%A1Hola!%2C%20Vengo%20de%20CLIMA-APP%20Y%20Me%20Gustar%C3%ADa%20Contactarte%F0%9F%8C%9D%E2%9D%84%EF%B8%8F%F0%9F%8C%9A'
    }

    return (
        <div className="navbar">
            <div >
                <img className="logo-navbar" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1635111872/cli_gieipv.jpg" alt="logo" />
            <ul className="secciones">
                <Link id="link"  to="/auth/inicioSesion"><li >Iniciar Sesion</li></Link>
                    <Link id="link" to="/auth/login">Inicio</Link>
                    <a id="link" href="#Aliados">Nuestros Servicios</a>
                    <a id="link"  href="#Aliados">Terminos y condiciones</a>
                    <button id="link" onClick={contact}>Contacto</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
