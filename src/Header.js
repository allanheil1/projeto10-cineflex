import styled from 'styled-components'

export default function Header(){
    return(
        <CineHeaderStyle>
            <p> CINEFLEX </p>
        </CineHeaderStyle>
    )
}

const CineHeaderStyle = styled.div`
    background-color:red;
    position: fixed;
    top: 0;
    left: 0;
    width: 375px;
    display: flex;
    justify-content: center;
`