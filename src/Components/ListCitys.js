import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../actions/actionCrud'
import {editarAsincrono} from '../actions/actionCrud'
import { Table } from 'react-bootstrap';
import React from "react";

const ListCitys = () => {
  const dispatch = useDispatch()

  const { ciudades } = useSelector((store) => store.ciudades);
  console.log(ciudades);
  return (
    <div>
        <h1 className="city-ti">CITIES IN DATABASE</h1>
        <Table striped bordered hover>
                <thead id="cabecera">
                    <tr>
                        <th>Nombre</th>
                        <th>Temperatura</th>
                        <th>Descripción</th>
                        <th>Humedad</th>
                        <th>Viento</th>
                        <th>Presión</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Feels_like</th>
                        <th>Acción Editar</th>
                        <th>Acción Eliminar</th>
                    </tr>
                </thead>
                <tbody>
      {ciudades ? (
        ciudades.map((city, index) => (
          <tr key={index}>
            <td  id="name-table">{city.nombre}</td>
            <td>
              {city.temperatura}˚C
            </td>
            <td>
              {city.descripcion}
            </td>
            <td>{city.humedad}%</td>
            <td>
             {city.viento}mph
            </td>
            <td>
              {city.presion}mb
            </td>
            <td>
              {city.latitud}
            </td>
            <td>
              {city.longitud}
            </td>
            <td>
              {city.feels_like}˚
            </td>
        
            <td onClick={()=>dispatch(editarAsincrono)}><button className="editar">Editar</button></td>
            <td onClick={()=>dispatch(eliminarAsincrono(city.nombre))}><button className="eliminar">Eliminar</button></td>
            </tr>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
       </tbody>
       </Table>
    </div>
  );
};

export default ListCitys;
