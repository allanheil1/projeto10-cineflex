import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
    return (
        <>
            <Link to={`/sessoes/${movie.id}`}>
                <div className='movie' data-test='movie'>
                    <img src={movie.posterURL} />
                </div>
            </Link>
        </>
    )
}

