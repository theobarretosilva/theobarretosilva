import styled from "styled-components";

export const LinhaRodapeStyled = styled.div`
    border: 0.1vw solid white;
`

export const FooterStyled = styled.footer`
    background-color: #000000;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2vw 4vw;

    @media (max-width: 490px) {
        flex-direction: column;
        gap: 5vh;
    }
`

export const PCopyrightStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: white;
    font-size: 1.2vw;

    @media (max-width: 490px) {
        font-size: 6vw;
    }
`

export const DivLinksRodapeStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3vw;

    @media (max-width: 490px) {
        gap: 5vw;
    }
`

export const ImgLinksRodapeStyled = styled.img`
    width: 3.1vw;
    height: 3.1vw;

    @media (max-width: 490px) {
        width: 9vw;
        height: 9vw;
    }
`