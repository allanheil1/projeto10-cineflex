import Header from './components/Header'
import Footer from './components/Footer'
import SelecionarFilme from './pages/SelecionarFilme'
import SelecionarHorario from './pages/SelecionarHorario'
import SelecionarAssentos from './pages/SelecionarAssentos'
import ResumoPedido from './pages/ResumoPedido'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<SelecionarFilme />}/>
        <Route path='/horario' element={<SelecionarHorario />}/>
        <Route path='/assento' element={<SelecionarAssentos />}/>
        <Route path='/resumodopedido' element={<ResumoPedido />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
