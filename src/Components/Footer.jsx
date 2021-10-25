import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="lg-footer">
            <h2 className="icon-lg"><i id="ico" class="fas fa-tint"></i>  CLIMA-APP</h2>
            </div>

            <div className="line"></div>

            <div className="items-footer">
                <ul className="items-footer">
                    <a className="footer-a" href="https://darksky.net/tos">Terms of Service</a>
                    <a className="footer-a"  href="https://github.com/DavidCardonaG">Attribution</a>
                    <Link className="footer-a"  to="/">Blog</Link>
                    <a href="#" className="footer-a" >Help</a>
                    <a className="footer-a" href="https://api.whatsapp.com/send?phone=573104027113&text=%F0%9F%98%83%20%C2%A1Hola!%2C%20Vengo%20de%20CLIMA-APP%20Y%20Me%20Gustar%C3%ADa%20Contactarte%F0%9F%8C%9D%E2%9D%84%EF%B8%8F%F0%9F%8C%9A">Contact</a>
                </ul>
            </div>
        </div>
        <div className="copyright">
                <p className="copy">Copyright  &copy; 2021, Clima-App.INC. All rights reserved.</p>
            </div>
       
        </>
    )
}

export default Footer
