import React from 'react';
import styled from 'styled-components';
import IMG404 from '../Img/IMG404.gif';

const Error404PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .NavOculto{
    background-color: #111111;
  }
  .ContentError404Page{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 10px;

    img{
      width: 70%;
      max-width: 480px;
      height: auto;
      border-radius: 8px;
    }
    .DescriptionError404{
      h2{
        color: var(--ColorPageGreen);
        span{
          color: var(--ColorPagePurple);
        }
      }
      p{
        color: black;
        width: 60%;
      }
    }
  }
  @media(min-width: 920px){
    .ContentError404Page{
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 10px 30px;

      img{
        width: 50%;
      }
      .DescriptionError404{
        max-width: 550px;
        h2{
          font-size: 2.3rem;
        }
        p{
          font-size: 1.5rem;
          width: 80%;
        }
      }
    }
  }
`;

const Error404Page = () => {
  return (
    <Error404PageStyle>
      <div className='NavOculto'></div>
      <div className='ContentError404Page'>
        <img src={IMG404} alt="404 Error" />
        <div className='DescriptionError404'>
          <h2><span>Oops!</span> La pagina que buscas no existe.</h2>
          <p>A veces hay que perderse antes de encontrar lo que se busca.</p>
        </div>
      </div>
    </Error404PageStyle>
  )
}

export default Error404Page