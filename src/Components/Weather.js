import React from 'react';
import Consulta from '../Components/Consulta'
import DataClima from '../Components/DataClima'
import MapBox from '../Components/MapBox'
class Weather extends React.Component {

    state = {
        temperature: 14.31,
        description: "fog",
        humidity:99,
        wind_speed: 1.03,
        city: "Medellín",
        country: "CO",
        pressure:1026,
        icon: "https://openweathermap.org/img/wn/50n@2x.png",
        feels_like: 14.89,
        lat:6.2518,
        long:-75.5636,
        visibilidty: "10 + mi"
    }

    obtenerData = async (e) =>{
        e.preventDefault();
        const {city} = e.target.elements;
        const cityValue = city.value;

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=7e02bbab10190866745c0ec1a8a18618&units=metric`
        const response = await fetch(URL)
        const data = await response.json()


        this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        icon: data.weather[0].icon,
        feels_like: data.main.feels_like,
        lat: data.coord.lat,
        long: data.coord.lon


        },()=> localStorage.setItem("Ciudad",JSON.stringify(this.state)));
    }

   

    render() {
        return(
            <div>
                <Consulta obtenerData={this.obtenerData}/>
                <DataClima {...this.state}/>
                <MapBox {...this.state}/>

            </div>
        )
    }

}

export default Weather