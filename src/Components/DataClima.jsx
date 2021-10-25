import React from 'react';
const DataClima = (props) => {
    console.log(props)
    return (
        <div>
        <div className="container-info">
            <div className="items">
                <p>Wind: {props.wind_speed} mph</p>
                <p>Humidity: {props.humidity}%</p>
                <p>UV Index:0</p>
                <p>Visibilidty: {props.visibilidty}</p>
                <p>Pressure: {props.pressure}mb</p>
            </div>
            </div>

            <div className="info-temp">
            <div className="city">
            <img  className="img-clima" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="logotipo-clima"/>
            <h2 className="des"> {props.description}</h2>
            <h2 className="temp">{props.temperature}˚C</h2>
            <h2 className="name"> {props.city},{props.country}</h2>
            
                </div>
            </div>

            <div className="dt-city">
                <p>Feels_like: {props.feels_like}˚</p>
                <p>LAT: {props.lat}</p>
                <p>LONG: {props.long}</p>
                </div>
    
            
        
        </div>
    )
}

export default DataClima
