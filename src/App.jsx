import PaginaInicial from "./pages/PaginaInicial"
import PaginaLogin from "./pages/PaginaLogin"
import EscolhaCadastro from "./pages/EscolhaCadastro"
import PaginaRegistroUser from "./pages/PaginaRegistroUser"
import PaginaRegistroEmpresa from "./pages/PaginaRegistroEmpresa"
import PaginaCriarConta from "./pages/PaginaCriarConta"
import RecuperarSenha from "./pages/RecuperarSenha"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PaginaInicial/>}/>
          <Route path={"/Login"} element={<PaginaLogin/>}/>
          <Route path={"/RecuperarSenha"} element={<RecuperarSenha/>}/>
          <Route path={"/EscolhaCadastro"} element={<EscolhaCadastro/>}/>
          <Route path={"/RegistroUser"} element={<PaginaRegistroUser/>}/>
          <Route path={"/RegistroConta"} element={<PaginaCriarConta/>}/>
          <Route path={"/RegistroEmpresa"} element={<PaginaRegistroEmpresa/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
