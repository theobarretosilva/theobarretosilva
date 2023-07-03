import styled from "styled-components";

export const DivLenguageStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 1.5vw;
    justify-content: flex-end;
    margin-right: 2vw;
    padding-top: 0.5vw;

    @media (max-width: 490px) {
        gap: 4vw;
        margin-bottom: 1vh;
        margin-right: 8.2vw;
    }
`

export const PLenguageStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    margin-bottom: 0;
    margin-top: 0.8rem;

    @media (max-width: 490px) {
        font-size: 1rem;
    }
`