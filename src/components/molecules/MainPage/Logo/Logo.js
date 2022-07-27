import { LogoWrapper } from "./styles";
import { Link } from "../../../atoms/MainPage/Link";
import { CookImg } from "../../../atoms/MainPage/CookImg";
import pic from "../../../../images/cook.png";

const Logo = ({onClick}) => (
  <LogoWrapper>
    <Link onClick={onClick}>
      <CookImg src={pic} />
    </Link>
  </LogoWrapper>
);

export default Logo;
