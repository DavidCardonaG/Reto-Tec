import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import {useDispatch} from 'react-redux'
import Navbar from '../Components/Navbar'
import Swal from 'sweetalert2'


const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });
 
    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {

        if(nombre === '' || email === '' || pass1 === '' || pass2 === ''){

            Swal.fire(
                'Todos los campos son Obligatorios',
                '¡Escribelo asi y solo asi podras Registrate!',
                'info'
              )
        }else{

        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
        
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Guardado',
            showConfirmButton: false,
            timer: 1000,
          })
        }
    }



    return ( 
        <div>
        <Navbar/>
    <form id="registro-form" onSubmit={handleRegistro}>
        <div className="container_Registro">
            <img className="logo-clima" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1635111872/cli_gieipv.jpg" alt="" />
            <div className="Form_Registro">
                    <h1 className="ti-reg">Registro</h1>
                    <input
                    className="input-regis"
                     value={nombre} 
                     name="nombre"
                     onChange={handleInputChange}
                    type="text" placeholder="Nombre" />
 
                    <input
                    className="input-regis"
                     value={email}
                     name="email" 
                     onChange={handleInputChange}
                    type="text" placeholder="Correo Electronico" />

                    <input
                    className="input-regis"
                    value={pass1}
                    name="pass1"
                    onChange={handleInputChange}
                    type="password" placeholder="Contraseña" />

                    <input
                    className="input-regis"
                    value={pass2}
                    name="pass2"
                    onChange={handleInputChange}
                    type="password" placeholder="Confirmar Contraseña" />
                    <button  className="btn-reg" type="submit">Registarse</button>
            </div>
        </div>
        </form>
        </div>
    )
}

export default Registro
