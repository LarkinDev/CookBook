import SearchBar from "../../../molecules/MainPage/SearchBar/SerachBar";
import Logo from "../../../molecules/MainPage/Logo/Logo";
import { HeaderWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const Header = ({recipes}) => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate(`/`);
  return (
    <HeaderWrapper>
      <Logo onClick={handleGoHome} />
      <SearchBar />
    </HeaderWrapper>
  );
};

export default Header;
