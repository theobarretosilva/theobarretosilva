import { Link } from "react-router-dom"
import { Lenguage } from "../../components/Lenguage/Lenguage"
import { Navbar } from "../../components/Navbar/Navbar"
import { PNavStyled } from "../../components/Navbar/Navbar.styled"
import { MainInicioStyled } from "./TelaInicio.styled"

export const TelaInicio = () => {
    return(
        <>
            <Navbar
                componentInicio={<PNavStyled style={{ textDecoration:'underline', cursor: 'default' }}>Início</PNavStyled>}
                componentProjetos={<Link to={'/projetos'} style={{ textDecoration: 'none' }}><PNavStyled>Projetos</PNavStyled></Link>}
            />
            <MainInicioStyled>
                <Lenguage />
                
            </MainInicioStyled>
        </>
    )
}