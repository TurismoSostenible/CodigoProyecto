import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import {
  HashRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from './Components/Header/Header';
import InicioPage from './Pages/InicioPage';
import Error404Page from './Pages/Error404Page';
import IniciarSesionPage from './Pages/IniciarSesionPage';
import FuenteLazer from './Fonts/Lazer84.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lazer';
    src: url(${FuenteLazer}) format('truetype');
  }
`;

const AppStyle = styled.div`
    flex-grow: 1;
    .NavOculto{
      height: 75px;
    }
    @media(min-width: 920px){
      .NavOculto{
        height: 105px;
      }
    }
`;

function AppCss () {
  return(
    <AppStyle>
      <FontStyles/>
      <Header/>
      <Outlet/>
    </AppStyle>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppCss/>}>
          <Route index element={<InicioPage/>}/>
          <Route path="IniciarSesion" element={<IniciarSesionPage/>}/>
          <Route path="*" element={<Error404Page/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
