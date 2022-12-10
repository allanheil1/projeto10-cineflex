import { Link } from 'react-router-dom';

export default function Movie({ movie }){
    return(
        <>
           <div className='movie'>
                <img src = {movie.posterURL}/>
            </div> 
        </>
    )
}