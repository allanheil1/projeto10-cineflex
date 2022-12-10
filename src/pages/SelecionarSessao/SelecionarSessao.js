import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SessaoDia from './SessaoDia'
import Footer from '../../components/Footer'

export default function SelecionarHorario(){

    const { movieId } = useParams();
    const [times, setTimes] = useState({});

    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

    useEffect(() => 
        {promise.then((res) => (setTimes(res.data)))}
    ,[]);

    return(
        <>
            <TimeTitle> Selecione o horário </TimeTitle>
            {times.days ? 
                times.days.map((time) => 
                    <SessaoDia key={time.id} weekday={time.weekday} date={time.date} showtimes={time.showtimes}/>
                )
                : 'Loading...'
            } 
            <Footer />
        </>
    )
}

const TimeTitle = styled.div`
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