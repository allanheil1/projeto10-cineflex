import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function SessaoDia({ date, weekday, showtimes }) {
    return (
        <>
            <Data>
                {weekday} - {date}
            </Data>
            <List>
                {showtimes.map((t) => 
                    (
                    <Link key={t.id} to={`/assentos/${t.id}`}>
                        <ShowTime > 
                            <p>{t.name}</p> 
                        </ShowTime>
                    </Link>
                    )
                )}
            </List>
        </>
    );
}

const Data = styled.div`
    margin-left: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
`

const List = styled.div`
    display: flex;
`

const ShowTime = styled.div`
    width: 83px;
    height: 43px;
    left: 114px;
    top: 227px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 8px 22px 24px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
`

