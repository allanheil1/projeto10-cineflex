import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function SelecionarAssentos(){

    const { sessionId } = useParams();
    const [assentos, setAssentos] = useState({});

    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);

    useEffect(() => 
        {promise.then((res) => (setAssentos(res.data), console.log(res.data.seats)))}
    ,[])

    function SelecionarAssentos(){
        alert('assento selecionado');
    }

    return(
        <> 
            <PageTitle> Selecione o(s) Assentos </PageTitle>
            <List>
                {assentos.seats ?
                    assentos.seats.map((a) => (
                        <Assento key={a.id} isAvailable={a.isAvailable} onClick={SelecionarAssentos}> 
                            {a.name} 
                        </Assento>
                    ))
                    : 'Loading...'
                }
            </List>
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

const Assento = styled.div`
  width: 22px;
  margin: 4px 4px;
  height: 22px;
  border: 1px solid #808F9D;
  background-color: ${props => (props.isAvailable ? '#C3CFD9' : '#FBE192')};
  border-radius: 50%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-bottom: 18px;
  cursor: pointer;
`