import styled from "styled-components";

export const DivConteudoInicioStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 490px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const TextSobreInicioStyled = styled.p`
    font-family: 'Arbutus Slab', sans-serif;
    font-size: 1.6vw;
    color: white;
    max-width: 44vw;
    padding-bottom: 4vw;
`

export const ImgTheoStyled = styled.img`
    width: 27vw;
    height: 27vw;
    padding-bottom: 1.5vw;
`