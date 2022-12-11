import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Footer({ page, movieId, sessionId }){

    const [moviePoster, setMoviePoster] = useState('');
    const [movieName, setMovieName] = useState('');
    const [movieSession, setMovieSession] = useState('');

    useEffect(() => 
        {switch(page){
            case 'session':
                const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);
                promise.then((res) => (setMovieName(`${res.data.title}`), setMoviePoster(`${res.data.posterURL}`)));
            break;
            case 'seats':
                const promise2 = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);
                promise2.then((res) => 
                (setMovieName(`${res.data.movie.title}`), 
                setMoviePoster(`${res.data.movie.posterURL}`), 
                setMovieSession(`${res.data.day.weekday}` + ' - ' + `${res.data.name}`)));
            break;
        }
    },[])

    switch(page){
        case 'session':
            return(
                <FooterStyle>
                    <img src={moviePoster}/>
                    <p> {movieName} </p>
                </FooterStyle>
            )

        case 'seats':
            return(
                <FooterStyle>
                    <img src={moviePoster}/>
                    <div>
                        <p> {movieName} </p>
                        <p> {movieSession} </p>
                    </div>
                </FooterStyle>
            )
    }
}

const FooterStyle = styled.div`
    position: fixed;
    bottom:0;
    left:0;
    background: #DFE6ED;
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    border: 1px solid #9EADBA;
    img{
        margin-left: 15px;
        margin-right: 20px;
        height: 80px;
        border: 6px solid white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`