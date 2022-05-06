import styled from "styled-components";

const HeaderTypeStyle = ({TypeStyle,openMenu}) => {
  if(TypeStyle==="Movil") {
    const StyleOpenMenu = openMenu?`background-color: #111111;`:`background-color: #00000040;`;
    return StyleOpenMenu;
  }
  return `
    padding: 30px 20px 0;
    background-color: transparent;
  `;
}

const NavTypeStyle = ({TypeStyle}) => {
  if(TypeStyle==="Movil") return `
    position: absolute;
    top: 100%;
    width: 100%;
    right: 0;
    background-color: #111111;
    ul{
      padding: 10px;
      flex-direction: column;
      li{
        a,button{
          border-top: 1px solid rgba(224, 231, 237, 0.1);
          padding: 10px;
          display: block;
          width: 100%;
        }
        a:hover,button:hover{
          background-color: var(--ColorPagePurple);
        }
        .IniciarSesion:hover{
          background-color: var(--ColorPagePurple);
        }
        .Registrase:hover{
          background-color: var(--ColorPageGreen);
        }
        .IniciarSesion,.Registrase{
          border-top: none;
          padding: 8px;
          width: initial;
        }
      }
      .OptionsSesion{
        border-top: 1px solid rgba(224, 231, 237, 0.1);
        display: flex;
        justify-content: space-around;
        padding: 15px 0 8px;
      }
    }
  `;
  return `
    ul{
      align-items: center;
      justify-content: flex-end;
      gap: 30px;
      li{
        a,button{
          padding: 10px 0 20px;
          display: block;
        }
        button{
          gap:10px;
        }
      }
      .OptionsSesion{
        align-self: flex-start;
        display: flex;
        gap: 30px;
      }
    }
  `;
}

const DesplegarTypeStyle = ({TypeStyle}) => {
  if(TypeStyle==="Movil") return `
  `;
  return `
    padding: 10px;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #111111;
    box-shadow: rgb(0 0 0 / 40%) 0px 0px 0px 2px, rgb(102 102 102 / 65%) 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset;
    border-radius: 10px;
    overflow: hidden;
    li:first-child{
      a{
        border-top: none;
      }
    }
    li{
      a{
        padding: 10px 30px 10px 5px !important;
        border-top: 1px solid rgba(224, 231, 237, 0.1);
      }
      a:hover,button:hover{
        background-color: #5328fe;
      }
    }
  `;
}

const ContainerOptionsTypeStyle = ({TypeStyle,seleccion,className}) => {
  if(TypeStyle==="Movil") {
    if(seleccion)
    return "&."+className+`
      {
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px, rgb(0 0 0) 0px 4px 6px -1px, rgb(0 0 0) 0px 1px 0px inset;
        border-radius: 10px;
        overflow: hidden;
      }
      .OptionElecction{
        border-top: none;
        border-bottom: 1px solid #2be6ab57;
      }
    `;
    return ``;
  }
  return `
    position: relative;
  `;
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  ${props=>HeaderTypeStyle(props)}
  &>p{
    font-family: 'Lazer';
    font-size: 3rem;
    color: var(--ColorPageGreen);
    text-shadow: 6px 0px 1px var(--ColorPagePurple);
    padding: 10px 30px;
  }
`;

const NavStyle = styled.nav`
  flex-grow: 1;
  ${props=>NavTypeStyle(props)}
  ul{
    list-style: none;
    display: flex;
    li{
      button{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .IniciarSesion,.Registrase{
        font-weight: 900;
        padding: 8px;
        border-radius: 5px;
      }
      .IniciarSesion:hover,.Registrase:hover{
        transform: scale(1.1);
      }
      .IniciarSesion{
        color: var(--ColorPageGreen);
        background-color: var(--ColorPagePurple);
      }
      .Registrase{
        color: var(--ColorPagePurple);
        background-color: var(--ColorPageGreen);
      }
    }
  }
`;

const ContainerOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  ${props=>ContainerOptionsTypeStyle(props)}
`;

const DesplegarStyle = styled.div`
  display: flex;
  flex-direction: column;
  ${props=>DesplegarTypeStyle(props)}
`;

const MovilStyle = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px;
  button {
    display: grid;
    place-items: center;
    path{
      fill: white;
    }
  }
`;

const SvgDesplegarStyle = styled.svg`
  path {
    fill: white;
  }
  ${props=>props.open&&`
    transform: rotateX(180deg);
  `}
`;

export {HeaderStyle,NavStyle,ContainerOptionsStyle,DesplegarStyle,MovilStyle,SvgDesplegarStyle};