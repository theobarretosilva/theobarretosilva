import { Link } from "react-router-dom"
import { NavbarStyled } from "../../components/Navbar/Navbar"
import { PNavStyled } from "../../components/Navbar/Navbar.styled"

export const TelaProjetos = () => {
    return(
        <>
            <NavbarStyled 
                componentInicio={<Link to={'/'} style={{ textDecoration: 'none' }}><PNavStyled>Início</PNavStyled></Link>}
                componentProjetos={<PNavStyled style={{ textDecoration:'underline', cursor: 'default' }}>Projetos</PNavStyled>}
            />
        </>
    )
}