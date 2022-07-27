import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { RecipePage } from "./pages/RecipePage";
import { AddFormPage } from "./pages/AddFormPage";
import {EditFormPage} from "./pages/EditFormPage"

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recipe/:recipeId" element={<RecipePage />} />
      <Route path="/recipe/edit/:recipeId" element={<EditFormPage />} />
      <Route path="/recipe/add" element={<AddFormPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
