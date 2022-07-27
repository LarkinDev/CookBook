import EditFormPageTemplate from "../components/templates/EditFormPageTemplate";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CustomNotification from "../components/atoms/notifiaction";

export const EditFormPage = () => {
  const { state } = useLocation();

  const handleEditRecipe = async (formData) => {
    try {
      const res = await axios.post(
        `https://exercise.cngroup.dk/api/recipes/${state._id}`,
        formData
      );

      CustomNotification("success", "Edited", "Recipe edited");
      return res.data;
    } catch (error) {
      console.log(error);
      CustomNotification("error", "Error", "Recipe not edited" + error.message);
      return false;
    }
  };

  return (
    <EditFormPageTemplate handleEditRecipe={handleEditRecipe} recipe={state} />
  );
};
