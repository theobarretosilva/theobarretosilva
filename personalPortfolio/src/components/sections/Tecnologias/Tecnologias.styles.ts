import styled from "styled-components";

export const SectionTec = styled.section`
    padding-bottom: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 490px) {
        margin-top: 1vh;
    }
`;

export const DivTecs = styled.div`
    padding-top: 1vh;
    display: flex;
    align-items: center;
`;

export const BtnNext = styled.button`
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 1;
    background: none;
    cursor: pointer;
    padding-bottom: 0;
    padding-top: 0;
`;

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5vw;
    width: 50rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    border-radius: 8px;
    background: #493353;
    padding: 3vh 1vw 3vh 1vw;
    margin: 0;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 490px) {
        width: 80vw;
    }
`

export const ImgHabInicio = styled.img`
    width: 4vw;
    height: 4vw;
`