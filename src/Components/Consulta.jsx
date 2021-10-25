import React from 'react';
const Consulta = props => {

   
    const geolocal = () => {
          const localization = (posicion) => {
              let latitude = posicion.coords.latitude;
              let longitude = posicion.coords.longitude;
              localStorage.setItem("Localización",( "latitude: " + latitude + ' ' +  "longitude: " + longitude))
          }

          const error = () =>{
              console.log("No Se Ha Podido Establecer La Localización")
          }

          navigator.geolocation.getCurrentPosition(localization,error)
           
    }

   
 
    return (
        <div>
            <div className="container-input">
                <div className="inputs">
                <form onSubmit={props.obtenerData}>
                <button onClick={geolocal} type="button" className="btn-icons1"><i  class="fas fa-location-arrow"></i></button>
              <input className="search" type="text" name="city" />
                <button type="submit" className="btn-icons2"><i class="fas fa-search"></i></button>
                </form>
                </div>
                
                <div className="container-selects">
                <select className="selects" value="metricas">

                <option value="˚F, mph">˚F, mph</option>
                <option value="C, m/s">˚C, m/s</option>
                <option value="˚C, km/h">˚C, km/h</option>
                <option value="˚C, mps">˚C, mps</option>
                </select>
                <select name="cod"  className="selects" value="idioma">
                <option value="˚F, mph">English</option>
                <option value="C, m/s">Deutsch</option>
                <option value="˚C, km/h">Español</option>
                <option value="˚C, mps">Français</option>
                <option value="˚C, mps">Italiano</option>
                <option value="˚C, mps">Nederlans</option>
                <option value="˚C, mps">Türk</option>
                <option value="˚C, mps">Français</option>
                </select>
                </div>
            </div>
        </div>
    )
}

export default Consulta
