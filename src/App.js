import Header from './Header'
import Footer from './Footer'
import SelecionarFilme from './SelecionarFilme'
import SelecionarHorario from './SelecionarHorario'
import SelecionarAssento from './SelecionarAssento'
import ResumoPedido from './ResumoPedido'
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={SelecionarFilme}/>
        <Route path='/horario' element={SelecionarHorario}/>
        <Route path='/assento' element={SelecionarAssento}/>
        <Route path='/resumodopedido' element={ResumoPedido}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
