import { Link } from "react-router-dom"
import { NavbarStyled } from "../../components/Navbar/Navbar"
import { PNavStyled } from "../../components/Navbar/Navbar.styled"

export const TelaInicio = () => {
    return(
        <>
            <NavbarStyled
                componentInicio={<PNavStyled style={{ textDecoration:'underline', cursor: 'default' }}>Início</PNavStyled>}
                componentProjetos={<Link to={'/projetos'} style={{ textDecoration: 'none' }}><PNavStyled>Projetos</PNavStyled></Link>}
            />
        </>
    )
}