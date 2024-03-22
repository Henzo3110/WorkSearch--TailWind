import PaginaInicial from "./pages/PaginaInicial"
import PaginaLogin from "./pages/PaginaLogin"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PaginaInicial/>}/>
          <Route path={"/Login"} element={<PaginaLogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
