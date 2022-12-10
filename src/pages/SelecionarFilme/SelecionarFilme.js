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
            <div className='movies-title'></div>
            <div className='movies-list'>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    )
}