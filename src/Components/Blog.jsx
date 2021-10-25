const Blog = () => {
    return (
        <div>
            <div className="Contai">
            <img className="img-blog" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1635166922/1083199739_0_0_1794_1015_1920x0_80_0_0_6f850c0d454f4cc8ffe5b87488ca6879_ywnnnx.jpg" alt="tierra"/>
        
                <h1 className="text">¿Quienes Somos?</h1>
                <p className="text-1">Somos una Empresa Técnologica dedicada a proporcionar datos climatologicos de diferentes Ciudades del mundo. <br></br><br></br>
                Contamos con los satelites de mayor calidad y proyección de todo america, posicionandonos como la tercer mejor compañia climatologica del mundo.
                </p>
            </div> 
            <div>
                <h1>¿Que Le Brinda Nuestra APP-WEB?</h1>
                <p>En Nuestra web-app podra consultar los siguientes datos de las ciudes del mundo en tiempo real:</p>
                <ul>
                    <li>Temperatura en grados Celsius.</li>
                    <li>Humedad.</li>
                    <li>Visibilidad.</li>
                    <li>Eólico.</li>
                    <li>Presíon del aire.</li>
                    <li>Medidor de Rayos UV.</li>
                    <li>Breve descripción del clima actual.</li>
                    <li>Coordenadas Exactas.</li>
                </ul>
            </div>

            <div>
                <h1 className="ti-map">Contamos con nuestro propio mapa</h1>
                <p className="p-map">El cual podras ver, navegar y consultar diferentes puntos de colombia  ya sea desde tu movil o navegador web</p>
                <img className="map" src="https://play-lh.googleusercontent.com/wMVjndFl8dDRtytHQYExcd7Gqhz4piC3uL_gFbcEx4i0GVjFmxd03y06NZYSsGjvsQ=w800-h500-rw" alt="mps"/>
            </div>

            <div className="soporte">
                <h1 className="ti-sop">Soporte las 24 Horas del día</h1>
                <p className="p-sop">Si tiene alguna duda o alguna consulta, no dude en contactarnos, tendremos el gusto de atenderle</p>
                <img className="sop" src="https://ristra.co/wp-content/uploads/2020/05/soporte_tecnico_sistemas.jpg" alt="soporte"/>
            </div>

        </div>
    )
}

export default Blog
