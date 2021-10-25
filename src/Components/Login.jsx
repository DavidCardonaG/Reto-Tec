import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import {loginEmailPassword, loginGoogle, loginFacebook} from '../actions/actionLogin';
import Navbar from '../Components/Navbar'

function Login() {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });
 
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
      <div>
        <Navbar/>
    <div id="container">
    <h1 className="tit">Iniciar Sesión</h1>
   <img className="logo-clima" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1635111872/cli_gieipv.jpg" alt="clima"/>
    <form onSubmit={handleLogin}>
      <div className="container-email">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-email"
          value={email}
          onChange={handleInputChange}
        />
     

        <input
          type="password"
          placeholder="Password"
          className="input-email"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
   </div>
      <button  className="button-enviar" type="submit">
        Enviar
      </button>

        <p className="ti-redes">Inicia Sesión con tus redes</p>
        <div className="redes-sociales">
            <div className="google">
                 <img onClick={handleGoogle} class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" />
                 <img onClick={handleFacebook} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" alt="facebook" />
            </div>
        </div>

        <p className="parrafo">Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de CLIMA-APP.</p>

    </form>
    <p className="p-registro">¿Eres nuevo en CLIMA-APP?</p>
      <Link id="regis" className="regis" to="/auth/registro">Crea tu cuenta en CLIMA-APP</Link>
    </div>
    </div>
    
  );
}

export default Login;
