import { DivNavStyled, HeaderStyled, NomeTheoStyled, PNavStyled } from "./Navbar.styled"

export const Navbar = () => {
    return(
        <HeaderStyled>
            <NomeTheoStyled>Théo Silva</NomeTheoStyled>
            <DivNavStyled>
                <PNavStyled>Início</PNavStyled>
                <PNavStyled>Projetos</PNavStyled>
            </DivNavStyled>
        </HeaderStyled>
    )
}