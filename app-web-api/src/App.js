import './App.css';
import Home from './pages/home/home.jsx';
import ListaLivros from './pages/listalivros/ListaLivros.jsx';
import CadastroLivros from './pages/cadastroLivro/cadastroLivro.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/container/container.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/listaLivro' element={<ListaLivros />} />
              <Route path='cadLivro' element={<CadastroLivros />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
