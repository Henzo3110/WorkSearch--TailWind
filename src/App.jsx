import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import Login from './pages/Login';
import RecuperarSenha from './pages/RecuperarSenha';
import EscolhaCadastro from './pages/EscolhaCadastro';
import PaginaRegistroUser from './pages/Registro/PaginaRegistroUser';
import PaginaRegistroEmpresa from './pages/Registro/PaginaRegistroEmpresa';

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
