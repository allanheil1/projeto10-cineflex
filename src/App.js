import Header from './components/Header';
import Footer from './components/Footer';
import SelecionarFilme from './pages/SelecionarFilme/SelecionarFilme';
import SelecionarHorario from './pages/SelecionarHorário/SelecionarHorario';
import SelecionarAssentos from './pages/SelecionarAssentos/SelecionarAssentos';
import ResumoPedido from './pages/ResumodoPedido/ResumoPedido';
import GlobalStyle from './styles/globalStyle';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Margin>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SelecionarFilme />}/>
          <Route path='/sessoes' element={<SelecionarHorario />}/>
          <Route path='/assentos' element={<SelecionarAssentos />}/>
          <Route path='/sucesso' element={<ResumoPedido />}/>
        </Routes>
      </BrowserRouter>
      </Margin >
    </>
  );
}

const Margin = styled.div`
margin-top: 67px;
`
