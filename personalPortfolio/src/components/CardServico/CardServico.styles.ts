import styled from "styled-components";

export const DivGeral = styled.div`
    max-width: 280px;
    max-height: 240px;
    border-radius: 12px;
    background: #8D818F;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    pointer-events: none;
`;

export const ImgServico = styled.img`
    width: 4.875rem;
    height: 4.875rem;
    margin-top: 1rem;
`;

export const TituloServico = styled.h1`
    color: #541C6C;
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin-bottom: 0;
`;

export const DescricaoServico = styled.p`
    display: flex;
    width: 14.9375rem;
    height: 3.5rem;
    text-align: center;
    color: #541C6C;
    text-align: center;
    font-size: 0.988rem;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    padding: 0 2vw 2vh 2vw;
`;