import styled from "styled-components";
import { motion } from 'framer-motion'

export const SectionCentral = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TituloServicos = styled.h1`
    color: #FFF;
    font-size: 1.8rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 0;
`;

export const SubtituloServicos = styled.h2`
    width: 59rem;
    text-align: center;
    color: #FFFFFF;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    margin: 0;

    @media (max-width: 490px) {
        max-width: 82vw;
    }
`;

export const DivServicosCards = styled.div`
    margin-top: 2rem;
    margin-bottom: 4.4rem;
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

export const DivCards = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3vw;
    width: 70rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    border-radius: 9px;
    background: #1C0028;
    padding: 3vh 2vw 3vh 2vw;
    margin: 0;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 490px) {
        width: 60vw;
        gap: 5vw;
        padding: 3vh 4vw 3vh 4vw;
    }
`;

export const InnerDivCards = styled(motion.div)`
    display: flex;
    gap: 2rem;
    width: 100%;
`;