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

export const DivCards = styled(motion.div)`
    width: 78%;
    max-width: 100%;
    height: 15rem;
    margin-top: 2rem;
    margin-bottom: 4.4rem;
    overflow: hidden;
    cursor: grab;

    @media (max-width: 490px) {
        width: 84%;
    }
`;

export const InnerDivCards = styled(motion.div)`
    display: flex;
    gap: 2rem;
    width: 100%;
`;