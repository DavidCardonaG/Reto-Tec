import React from "react"
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/actionLogin";


const Header = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(startLogout());
    };
    const contact = () =>{
        window.location = 'https://api.whatsapp.com/send?phone=573104027113&text=%F0%9F%98%83%20%C2%A1Hola!%2C%20Vengo%20de%20CLIMA-APP%20Y%20Me%20Gustar%C3%ADa%20Contactarte%F0%9F%8C%9D%E2%9D%84%EF%B8%8F%F0%9F%8C%9A'
    }
    const app = () => {
        window.location = 'https://darksky.net/app'
    }
    return (
        <div>
             <div className="header">
               
            <ul className="secciones-header">
                    <button className="btn-header"><i class="fas fa-tint"></i>  CLIMA-APP</button>
                    <button className="btn-header" onClick={app}><i class="fas fa-mobile-alt"></i>  APP</button>
                    <Link to="/mapas" className="btn-header">MAPS</Link>
                    <Link to="/crud" className="btn-header" >DARKS API</Link>
                    <button className="btn-header"onClick={contact}>CONTACTO</button>
                    <button className="btn-header" onClick={handleLogout}>CERRAR SESÍON</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
