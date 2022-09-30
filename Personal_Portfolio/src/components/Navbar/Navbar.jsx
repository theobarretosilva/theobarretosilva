import { Link } from "react-router-dom";
import { BtnPortfolioStyled, HeaderbarStyled, PCurriculoStyled } from "./Navbar.styles"

export const Navbar = () => {
    return(
        <HeaderbarStyled>
            <PCurriculoStyled>Currículo</PCurriculoStyled>
            <Link to="/portfolio"><BtnPortfolioStyled>Portfólio</BtnPortfolioStyled></Link>
        </HeaderbarStyled>
    );
};