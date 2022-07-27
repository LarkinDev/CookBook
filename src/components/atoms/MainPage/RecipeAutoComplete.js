import { AutoComplete } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"

const { Option } = AutoComplete;

export const Complete = () => {
  const [result, setResult] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();
  const handleGoPageDetails = (recipeId) => navigate(`/recipe/${recipeId}`);

  const handleGetAllRecipies = async () => {
    try {
      const result = await axios.get(
        `https://exercise.cngroup.dk/api/recipes/`
      );
      const cards = result.data;
      setRecipes(cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllRecipies();
  }, [recipes.length]);

  const handleSearch = (value) => {
    let res = [];

    if (!value) {
      res = [];
    } else {
      res = recipes
        .filter((x) => x.title.toLowerCase().includes(value.toLowerCase()))
        .map((obj) => obj.title);
    }
    setResult(res);
  };

  const onSelect = (data) => {
    const slug = recipes.find((x) => x.title === data).slug;

    handleGoPageDetails(slug);

    console.log("onSelect", data.slug);
  };

  return (
    <AutoComplete
      onSearch={handleSearch}
      onSelect={onSelect}
      placeholder="Search recipe"
    >
      {result.map((val) => (
        <Option key={val} value={val}>
          {val}
        </Option>
      ))}
    </AutoComplete>
  );
};
