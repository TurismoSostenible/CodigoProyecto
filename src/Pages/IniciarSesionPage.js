import React from 'react';
import styled from 'styled-components';
import Login from '../Components/Login/Login';
import IMGFondoInicioSesion from '../Img/InicioSesionFondo.jpg';

const IniciarSesionPageStyle = styled.div`
  display: flex;
  background-image: url('${IMGFondoInicioSesion}');
  background-position: center;
  background-size: cover;
  flex-direction: column;
  height: 100vh;
  position: relative;
  z-index: 1;
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000000c2;
    z-index: 2;
  }
  .NavOculto{
    background-color: #111111;
  }
  .ContentIniciarSesionPage{
    flex-grow: 1;
    position: relative;
    z-index: 3;
    display: grid;
    place-items: center center;
  }
  @media(min-width: 920px){
    .NavOculto{
      background-color: transparent;
    }
  }
`;

const IniciarSesionPage = () => {
  return (
    <IniciarSesionPageStyle>
      <div className='NavOculto'></div>
      <div className='ContentIniciarSesionPage'>
        <Login/>
      </div>
    </IniciarSesionPageStyle>
  )
}

export default IniciarSesionPage;