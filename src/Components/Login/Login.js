import React, { useState } from 'react';
import { LoginStyle } from './LoginCss';
import { SvgPassword, SvgUser } from './LoginStatics';

const ValuesForm = {
  user: "",
  password: ""
};

const Login = () => {
  const [values, setValues] = useState(ValuesForm);

  const HandleChange = (e) => setValues({...values,[e.target.name]:e.target.value});
  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <LoginStyle>
      <h2>Inicia Sesion Con Tu Cuenta</h2>
      <form onSubmit={HandleSubmit}>
        <div className='FormOptions'>
          <div><SvgUser size={27}/></div>
          <input type="text" onChange={HandleChange} value={values.user} placeholder='Email o Usuario' name='user' autoComplete='off'/>
        </div>
        <div className='FormOptions'>
          <div><SvgPassword size={27}/></div>
          <input type="password" onChange={HandleChange} value={values.password} placeholder='Contraseña' name='password'/>
        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>
    </LoginStyle>
  )
}

export default Login;