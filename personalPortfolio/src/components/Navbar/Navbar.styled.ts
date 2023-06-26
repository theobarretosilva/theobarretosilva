import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background-image: url('https://github.com/theobarretosilva/theobarretosilva/blob/main/personalPortfolio/src/assets/imgs/fundoNavbarMarmore.png?raw=true');
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1vw 3vw;
    align-items: center;
`

export const NomeTheoStyled = styled.p`
    font-family: 'Nothing You Could Do', cursive;
    font-size: 3vw;
    color: white;
    margin: 0;
`

export const DivNavStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3vw;
`

export const PNavStyled = styled.p`
    font-family: 'Arbutus Slab', sans-serif;
    color: white;
    font-size: 1.6vw;
    cursor: pointer;
`

export const BtnBaixarCV = styled.button`
    width: 10.625rem;
    height: 3.125rem;
    border-radius: 25px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(62, 62, 62, 0.25);
    border: none;
    color: #000;
    font-size: 1.2rem;
    font-family: Inter;
    font-weight: 500;
    cursor: pointer;
`;