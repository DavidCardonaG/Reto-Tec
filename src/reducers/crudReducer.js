import { typesApi } from "../types/types";

const initialState = {
    ciudades: []
}

export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesApi.registrar:
            return{
            ciudades:[action.payload]
            }
        case typesApi.listar:
            return{
            ciudades:[...action.payload]
            }
        case typesApi.editar:
            return{
                ciudades:[...action.payload]
            }
        case typesApi.eliminar:
            return{
                ciudades: state.ciudades.filter(pro => pro.nombre !== action.payload)
            }
    
        default:
           return state;
    }

}
