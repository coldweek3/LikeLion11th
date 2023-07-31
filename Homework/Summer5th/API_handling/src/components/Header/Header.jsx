import { HeaderContainer, LikeLionLogo } from "../HeaderStyle";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <HeaderContainer>
        <LikeLionLogo src={DGULikeLion} alt="LikeLion_Logo"/>
    </HeaderContainer>
  );
};

export default Header;
