import styled from 'styled-components'

export default function Footer(){
    return(
        <FooterStyle>
            <p> FOOTER </p>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    background: blue;
    width: 375px;
    display: flex;
    justify-content: center;

`