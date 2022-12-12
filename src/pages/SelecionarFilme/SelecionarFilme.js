import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Movie from './Filme';
import axios from 'axios';

export default function SelecionarFilme(){

    const [movies, setMovies] = useState([]);

    const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');

    useEffect(() => 
        {promise.then((res) => setMovies(res.data))}
    , []);

    return(
        <>
            <PageTitle> Selecione o Filme </PageTitle>
            <MoviesList>
                {movies.length > 0 ? 
                    movies.map((movie) => (
                        <Movie key={movie.id} movie={movie}/>
                    ))
                    : 'Carregando filmes...'
                }
            </MoviesList>
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

const MoviesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    img {
        height: 209px;
        width: 145px;
        border: 8px solid white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        margin: 30px 11px;
        cursor: pointer;  
    }
`