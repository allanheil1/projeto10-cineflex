import styled from 'styled-components';

export default function Header(){
    return(
        <CineHeaderStyle>
            <p> CINEFLEX </p>
        </CineHeaderStyle>
    )
}

const CineHeaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e8833a;
    font-size: 34px;
    text-transform: uppercase;
`