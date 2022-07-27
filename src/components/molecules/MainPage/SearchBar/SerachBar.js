import { SearchBarWrapper } from "./styles";
import { Complete } from "../../../atoms/MainPage/RecipeAutoComplete";
import "antd/dist/antd.css";
import "./styles.css";

const SearchBar = () => (
  <SearchBarWrapper>
    <Complete />
  </SearchBarWrapper>
);

export default SearchBar;
