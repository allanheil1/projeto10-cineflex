import styled from 'styled-components';
import { useLocation, Link  } from 'react-router-dom';

export default function ResumoPedido(){

    const location = useLocation();
    return(
        <>
            <Centralized>
                <h1>
                    Pedido Feito com Sucesso!
                </h1>
            </Centralized>
            <Infos>
                <h1>
                    Filme e sessão
                </h1>
        
                <div data-test='movie-info'>
                    <p>
                        {location.state.movieName}
                    </p>
                    <p>
                        {location.state.movieSession}
                    </p>
                </div>

                <div data-test='seats-info'>
                    <h2>
                        Ingressos
                    </h2>
                    <p>
                        {location.state.assentosNumeros.map((h, index) => (
                            <span key={index}> Assento: {h}</span>
                        ))}
                    </p>
                </div>

                <div data-test='client-info'>
                    <h3>
                        Comprador
                    </h3>
                    <p>
                        Nome: {location.state.body.name}
                    </p>
                    <p>
                        CPF: {location.state.body.cpf}
                    </p>
                </div>
                </Infos>
                <Centralized>
                    <Link to={'/'}>
                        <button data-test='go-home-btn'> Voltar pra Home </button>
                    </Link>
                </Centralized>

        </>
    )
}

const Centralized = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{ 
        width: 180px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #247A6B; 
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    button{
        margin-top: 70px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        color: white;
        font-family: 'Roboto';
        letter-spacing: 0.04em;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    margin-bottom: 30px;
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0.04em;
    h2, h3, h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        margin-top: 30px;
        margin-bottom: 5px;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }
`