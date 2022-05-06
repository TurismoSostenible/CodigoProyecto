import React from 'react';
import styled from 'styled-components';
import IMGFondoInicio from '../Img/FondoInicio.jpg';

const InicioPageStyle = styled.div`
`;

const PresentacionStyle = styled.div`
  background-image: url('${IMGFondoInicio}');
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  color: white;
  &>*{
    position: relative;
    z-index: 3;
  }
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    background-color: #000000c2;
  }
  .ContentPresentacionInicio{
    padding: 50px 10px 70px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;

    small{
      color: var(--ColorPagePurple);
      font-weight: 900;
      font-size: 0.9rem;
    }
    h1{
      color: var(--ColorPageGreen);
      span {
        color: var(--ColorPagePurple);
        text-shadow: 3px 0px 1px var(--ColorPageGreen);
      }
    }
    p{
      width: 80%;
    }
  }
  @media(min-width: 920px){
    .ContentPresentacionInicio{
      padding: 70px 40px 90px;
      max-width: 710px;
    }
  }
`;



const InicioPage = () => {
  return (
    <InicioPageStyle>
      <PresentacionStyle>
        <div className='NavOculto'></div>
        <div className='ContentPresentacionInicio'>
          <small>Introduccion</small>
          <h1>La actividad turística sostenible y su efecto en una cadena de valor agrícola de <span>Bogota</span> .</h1>
          <p>Se concluye la necesidad de establecer un método de análisis para futuras investigaciones sobre el impacto del turismo en las diferentes cadenas de valor de esa ciudad y otras actividades económicas relacionadas.</p>
        </div>
      </PresentacionStyle>
    </InicioPageStyle>
  )
}

export default InicioPage;