import * as S from "./Navbar.styled"
import PropTypes from "prop-types"

export const Navbar = ({componentInicio, componentProjetos}) => {
    return(
        <S.HeaderStyled>
            <S.NomeTheoStyled>Théo Silva</S.NomeTheoStyled>
            <S.DivNavStyled>
                {componentInicio}
                {componentProjetos}
            </S.DivNavStyled>
            <S.BtnBaixarCV>Baixar CV</S.BtnBaixarCV>
        </S.HeaderStyled>
    )
}

Navbar.propTypes = {
    componentInicio: PropTypes.node.isRequired,
    componentProjetos: PropTypes.node.isRequired
}