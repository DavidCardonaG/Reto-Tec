import { typesApi } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,updateDoc,where} from "@firebase/firestore";
import Swal from 'sweetalert2'

export const editarAsincrono = (ciudades) => {
    return async (dispatch, getState) => {
        const id = getState().login.id;
        console.log(ciudades)

        const EditCard = {
            nombre: ciudades.nombre,
            temperatura: ciudades.temperatura,
            descripcion: ciudades.descripcion,
            humedad: ciudades.humedad,
            viento: ciudades.viento,
            presion: ciudades.presion,
            latitud: ciudades.latitud,
            longitud: ciudades.longitud,
            feels_like: ciudades.feels_like,
        }

        const cardFire = { ...EditCard }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const docRef = await doc(db, `${id}/ciudades/data/`, `${ciudades.id}`);
        console.log(docRef)
        // Update the timestamp field with the value from the server
        const updateTimestamp = await updateDoc(docRef, {
            nombre: ciudades.nombre,
            temperatura: ciudades.temperatura,
            descripcion: ciudades.descripcion,
            humedad: ciudades.humedad,
            viento: ciudades.viento,
            presion: ciudades.presion,
            latitud: ciudades.latitud,
            longitud: ciudades.longitud,
            feels_like: ciudades.feels_like,
        });

        Swal.fire('Saved', ciudades.nombre, 'success');
        dispatch(listAsincrono(id))
    }

}
export const editarSincrono = (id, ciudades) => {
    return{
        type: typesApi.editar,
        payload: {
            id,
            ...ciudades}
    }
}

export const eliminarAsincrono = (nombre) => {
    return async (dispatch) =>{
        const proData = collection(db,"ciudades");
        const q = query(proData,where("nombre","==",nombre))

        const date = await getDocs(q);
        date.forEach((dt) => {
            deleteDoc(doc(db,"ciudades",dt.id))
        })
        dispatch(eliminarSincrono(nombre));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Los Datos Han Sido Borrados Correctamente',
            showConfirmButton: false,
            timer: 2000
          })

    }
}
export const eliminarSincrono = (nombre) =>{
    return{
        type:typesApi.eliminar,
        payload:nombre
    }
}
export const listAsincrono = () =>{
    return async(dispatch)=>{
      const datos = await getDocs(collection(db,"ciudades"))
      const products = []
      datos.forEach((doc) => {
          products.push({ 
              ...doc.data()
          })
      })
      dispatch(listSincrono(products))
    }
}
export const listSincrono = (ciudades) => {
    return{
        type:typesApi.listar,
        payload:ciudades
    }
}

export const registerCitys = (nombre,temperatura,descripcion,humedad,viento,presion,latitud,longitud,feels_like) =>{
    return(dispatch)=>{
        const newCity = {
            nombre,
            temperatura,
            descripcion,
            humedad,
            viento,
            presion,
            latitud,
            longitud,
            feels_like
        }
        addDoc(collection(db,"ciudades"), newCity)
        .then(res => {
            dispatch(registerCitySincrono (newCity))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registerCitySincrono = (ciudades) => {
    return{
        type: typesApi.registrar,
        payload:ciudades
    }
}
    
    