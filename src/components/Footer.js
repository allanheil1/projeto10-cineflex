import styled from 'styled-components';

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
    background: #DFE6ED;
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: center;
    border: 1px solid #9EADBA;
`