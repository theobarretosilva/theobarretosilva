import { DivNavStyled, HeaderStyled, NomeTheoStyled, PNavStyled } from "./Navbar.styled"
import PropTypes from "prop-types"

export const NavbarStyled = ({componentInicio, componentProjetos}) => {
    return(
        <HeaderStyled>
            <NomeTheoStyled>Théo Silva</NomeTheoStyled>
            <DivNavStyled>
                {componentInicio}
                {componentProjetos}
            </DivNavStyled>
        </HeaderStyled>
    )
}

NavbarStyled.propTypes = {
    componentInicio: PropTypes.node.isRequired,
    componentProjetos: PropTypes.node.isRequired
}