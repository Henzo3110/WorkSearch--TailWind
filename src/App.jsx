import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Login from './pages/Login/Login';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import EscolhaCadastro from './pages/EscolhaCadastro/EscolhaCadastro';
import PaginaRegistroUser from './pages/Registro/PaginaRegistroUser';
import PaginaRegistroEmpresa from './pages/Registro/PaginaRegistroEmpresa';
import Entrou from './pages/Entrou';

// Paginas

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PaginaInicial/>}/>
          <Route path={"/Login"} element={<Login/>}/>
          <Route path={"/RecuperarSenha"} element={<RecuperarSenha/>}/>
          <Route path={"/EscolhaCadastro"} element={<EscolhaCadastro/>}/>
          <Route path={"/RegistroUser"} element={<PaginaRegistroUser/>}/>
          <Route path={"/RegistroEmpresa"} element={<PaginaRegistroEmpresa/>}/>
          <Route path={"/Entrou"} element={<Entrou/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
