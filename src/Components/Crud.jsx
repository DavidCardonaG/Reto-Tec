import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
// import { fileUpload } from '../helpers/FileUpload';
import { registerCitys } from '../actions/actionCrud';
import {listAsincrono} from '../actions/actionCrud'
import ListCitys from '../Components/ListCitys'
 const Crud = ({ history }) => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        nombre:'',
        temperatura:'',
        descripcion:'',
        humedad:'',
        viento:'',
        presion:'',
        latitud:'',
        longitud:'',
        feels_like:''
    })

    let {nombre,temperatura,descripcion,humedad,viento,presion,latitud,longitud,feels_like } = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registerCitys(nombre,temperatura,descripcion,humedad,viento,presion,latitud,longitud,feels_like));
        reset();
    }

    useEffect(() => {
        dispatch(listAsincrono())
    }, [dispatch])

    return (
        <div>
            <Link className="back" to="/"><i id="fas" class="fas fa-arrow-left"></i></Link>
            <h1 className="title-pro">BIENVENIDO A LA SECCIÓN DE REGISTRO DE CIUDADES</h1>
            <p className="pa-pro">Nos agrada que seas nuestro aliado</p>

            <form  className="form" onSubmit={handleRegistro}>
                <h1 className="ti-pro">CITY</h1>
                <div className="form-group">
                    <div >
                        <label id="ti-label" htmlFor="documento">Nombre:</label>
                        <input 
                        placeholder="Nombre de la ciudad"
                        className="input-regis" 
                        type="text"
                        name="nombre" 
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange} />
                    </div>

                    <div>
                        <label id="ti-label" htmlFor="nombres">Temperatura:</label>
                        <input 
                        placeholder="Temperatura actual"
                        className="input-regis"  
                        type="number" 
                        name="temperatura" 
                        id="precio"
                        value={temperatura}
                        onChange={handleInputChange} />
                    </div>

                    <div>
                        <label id="ti-label" htmlFor="telefono">Descripción:</label>
                        <input 
                        placeholder="Descripción corta, ejm, niebla,sol,lluvia"
                        className="input-regis" 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        value={descripcion}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Humedad:</label>
                        <input 
                        placeholder="Humedad actual"
                        className="input-regis" 
                        type="number" 
                        name="humedad" 
                        id="humedad"
                        value={humedad}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Viento:</label>
                        <input 
                        placeholder="Viento actual"
                        className="input-regis" 
                        type="number" 
                        name="viento" 
                        id="viento"
                        value={viento}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Presión:</label>
                        <input 
                        placeholder="Presion en mb"
                        className="input-regis" 
                        type="number" 
                        name="presion" 
                        id="presion"
                        value={presion}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Latitude:</label>
                        <input 
                        placeholder="latitude exacta"
                        className="input-regis" 
                        type="number" 
                        name="latitud" 
                        id="latitud"
                        value={latitud}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Longitude:</label>
                        <input 
                        placeholder="longitude exacta"
                        className="input-regis" 
                        type="number" 
                        name="longitud" 
                        id="longitud"
                        value={longitud}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id="ti-label" htmlFor="telefono">Feels_like:</label>
                        <input 
                        placeholder="Feels-Like"
                        className="input-regis" 
                        type="number" 
                        name="feels_like"  
                        id="feels_like"
                        value={feels_like}
                        onChange={handleInputChange} />
                    </div>

                    <div>
                        <button className="btn-guardar"
                            type="submit">Guardar</button>
                    </div>
                    <div>
                        <button className="btn-cancelar" onClick={reset}
                        type="button">Cancelar</button>
                    </div>

                </div>
            </form>
        <ListCitys/>
        </div>
    )
}

export default Crud