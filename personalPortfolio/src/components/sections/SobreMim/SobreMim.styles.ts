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

    @media (max-width: 490px) {
        display: none;
    }
`

export const ImgTheoStyled = styled.img`
    width: 27vw;
    height: 27vw;
    padding-bottom: 1.5vw;

    @media (max-width: 490px) {
        display: none;
    }
`

/* ELEMENTOS PARA CELULAR */

export const TextCelular = styled.p`
    display: none;

    @media (max-width: 490px) {
        text-align: center;
        font-size: 1.2rem;
        font-family: 'Arbutus Slab', sans-serif;
        color: white;
        max-width: 82vw;
        padding-bottom: 2vh;
        display: grid;
    }
`;

export const ImgTheoCelular = styled.img`
    display: none;

    @media (max-width: 490px) {
        width: 65vw;
        height: 65vw;
        padding-bottom: 2vw;
        display: grid;
    }
`;