import { BrowserRouter, Routes, Route } from "react-router";

import Login from "./pages/login/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa/Pesquisa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;