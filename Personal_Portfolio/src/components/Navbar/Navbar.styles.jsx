import styled from "styled-components";

export const HeaderbarStyled = styled.header`
    background: #D9D9D9;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`

export const NavbarStyled = styled.nav`
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    gap: 1000px;
`

export const PCurriculoStyled = styled.p`
    font-family: 'Arbutus Slab', sans-serif;
    font-weight: 400;
    font-size: 19px;
    color: black;
    text-decoration: underline;
`

export const BtnPortfolioStyled = styled.button`
    border: 2px solid #550000;
    border-radius: 30px;
    background: #D9D9D9;
    color: #550000;
    font-family: 'Arbutus Slab', sans-serif;
    font-weight: 400;
    font-size: 19px;
    text-decoration: underline;
    padding-left: 1.8%;
    padding-right: 1.8%;
    padding-top: 0;
    padding-bottom: 0;
    height: 82%;
    margin-top: 0.5%;
    cursor: pointer;

    :hover{
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
`