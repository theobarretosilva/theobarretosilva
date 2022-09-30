import { Link } from "react-router-dom";
import { BtnPortfolioStyled, HeaderbarStyled, NavbarStyled, PCurriculoStyled } from "./Navbar.styles"

export const Navbar = () => {
    return(
        <HeaderbarStyled>
            <NavbarStyled>
                <PCurriculoStyled>Currículo</PCurriculoStyled>
                <Link to="/portfolio"><BtnPortfolioStyled>Portfólio</BtnPortfolioStyled></Link>
            </NavbarStyled>
        </HeaderbarStyled>
    );
};