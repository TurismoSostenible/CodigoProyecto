import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useResponsive from '../../Hooks/useResponsive';
import { ContainerOptionsStyle, DesplegarStyle, HeaderStyle, MovilStyle, NavStyle } from './HeaderCss';
import { SvgCloseMenu, SvgDesplegar, SvgMenu } from './HeaderStatics';

const OptionNav = ({name,classOption,...props}) => {
  return(
    <li>
      <NavLink className={classOption} {...props}>
        {name}
      </NavLink>
    </li>
  );
}

const OptionsInteraction = {
  informacion : false
}

const Nav = ({TypeStyle,HandleCloseInteraction}) => {
  const [openOption, setOpenOption] = useState(OptionsInteraction);

  const HandleClickDesplegar = (option) => setOpenOption({...OptionsInteraction,[option]:openOption[option]?false:true});

  const HandleOverDesplegar = (option) => setOpenOption({...openOption,[option]:true});

  const HandleOutDesplegar = (option) => setOpenOption({...openOption,[option]:false});

  return (
    <NavStyle TypeStyle={TypeStyle}>
      <ul>
        <OptionNav to="/" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Inicio"/>
        <ContainerOptionsStyle
          onMouseOver={TypeStyle==="Escritorio"?()=>HandleOverDesplegar("informacion"):null}
          onMouseOut={TypeStyle==="Escritorio"?()=>HandleOutDesplegar("informacion"):null}
          seleccion={openOption.informacion}
          className="informacion"
          TypeStyle={TypeStyle}
        >
          <li>
            <button onClick={TypeStyle==="Movil"?()=>HandleClickDesplegar("informacion"):null} className="OptionElecction">
              Info
              <SvgDesplegar size={15} open={openOption.informacion}/>
            </button>
          </li>
          {openOption.informacion&&<DesplegarStyle TypeStyle={TypeStyle}>
            <OptionNav to="/Localidades" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Localidades"/> 
            <OptionNav to="/Veredas" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Veredas"/> 
            <OptionNav to="/Upas" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="UPAS"/>
          </DesplegarStyle>}
        </ContainerOptionsStyle>
        <OptionNav to="/AtractivosTuristicos" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Atractivos Turisticos"/>
        <OptionNav to="/QuienesSomos" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Quienes Somos"/>
        <div className='OptionsSesion'>
          <OptionNav to="/IniciarSesion" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Iniciar Sesion" classOption="IniciarSesion"/>
          <OptionNav to="/Registrarse" onClick={TypeStyle==="Movil"?HandleCloseInteraction:null} name="Registrarse" classOption="Registrase"/>
        </div>
      </ul>
    </NavStyle>
  );
}

const MenuMovil = ({openMenu, setOpenMenu}) => {
  const HandleClickInteraction = () => setOpenMenu(openMenu?false:true);
  const HandleCloseInteraction = () => setOpenMenu(false);

  return(
    <MovilStyle>
      <button onClick={HandleClickInteraction} className={openMenu?'CloseMenu':''}>
        {openMenu?<SvgCloseMenu size={45}/>:<SvgMenu size={45}/>}
      </button>
      {openMenu&&<Nav TypeStyle="Movil" HandleCloseInteraction={HandleCloseInteraction}/>}
    </MovilStyle>
  );
}

const Header = () => {
  const Escritorio = useResponsive(920);
  const TypeStyle = Escritorio?"Escritorio":"Movil";
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderStyle TypeStyle={TypeStyle} openMenu={openMenu}>
      <p>TSA</p>
      {!Escritorio&&<MenuMovil openMenu={openMenu} setOpenMenu={setOpenMenu}/>}
      {Escritorio&&<Nav TypeStyle="Escritorio"/>}
    </HeaderStyle>
  )
}

export default Header;