import '@testing-library/jest-dom'
import {loginReducer} from '../reducers/loginReducer'
import {types} from '../types/types'

describe('Pruebas en LoginReducer', () => {

    test('Estado Inicializado', () => {
        const state = loginReducer({logeed: false}, {})
        expect(state).toEqual({logeed: false})
    })

    test('Auth y Names', () => {
        const action = {
            type:types.login,
            payload:{
                name:"david",

            }
        }

        const state = loginReducer({logeed:true},action)
        expect(state).toEqual({
            name:"david",
            logged:true
        })
    })

    test('Logout Y Name', () => {
        const action ={
            type:types.logout
        }

        const state = loginReducer({logged:true, name:''},action)
        expect(state).toEqual({logged:false})
    })
})