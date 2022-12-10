import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../components/Footer';
import Assento from './Assento';

export default function SelecionarAssentos(){

    const { sessionId } = useParams();
    const [assentos, setAssentos] = useState({});
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [ids, setIds] = useState([]);
    const navigate = useNavigate();

    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);

    useEffect(() => 
        {promise.then((res) => (setAssentos(res.data), console.log(res.data.seats)))}
    ,[])

    function fazerPedido(e){
        e.preventDefault();
        const body = {ids, name, cpf};
        console.log(body);
        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', body);
        promise.then(navigate('/sucesso'));
        promise.catch('Erro na requisição');
    }

    return(
        <> 
            <PageTitle> Selecione o(s) Assentos </PageTitle>
            <List>
                {assentos.seats ?
                    assentos.seats.map((a) => (
                        <Assento key={a.id} ids={ids} setIds={setIds} id={a.id} isAvailable={a.isAvailable} numeroAssento={a.name}/> 
                    ))
                    : 'Loading...'
                }
            </List>
            <ColorCaptions>
                <Caption color={'#1AAE9E'}> <p> Selecionado </p>  </Caption>
                <Caption color={'#C3CFD9'}> <p> Disponível </p> </Caption>
                <Caption color={'#FBE192'}> <p> Indisponível </p> </Caption>
            </ColorCaptions>
            <Formulario onSubmit={fazerPedido}>
                <p>Nome do comprador: </p>
                <input onChange={e => setName(e.target.value)} placeholder='Digite seu nome...' type='text' required/> 
                <p>CPF do comprador: </p>
                <input onChange={e => setCpf(e.target.value)} placeholder='Digite seu CPF...' type='text' required/> 
                <button type='submit'> <h1> Reservar assento(s) </h1> </button>
            </Formulario>
            <Footer/>
        </>
    )
}

const PageTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    height: 110px;
`

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ColorCaptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Caption = styled.div`
  width: 22px;
  margin: 4px 4px;
  height: 22px;
  border: 1px solid #808F9D;
  background-color: ${props => (props.color)};
  border-radius: 50%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    margin-top: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
  }
`

const Formulario = styled.form`
    margin: 50px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845; 
    }
    input{
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
        padding-left: 15px;
        ::placeholder {
            font-style: italic;
            color: #AFAFAF;;
        }
    }
    button{
        margin-top: 10px;
        margin-bottom: 117px;
        width: 100%;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        border-color: #E8833A;
        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }
    }
`