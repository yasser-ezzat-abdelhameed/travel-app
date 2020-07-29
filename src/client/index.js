import "./styles/resets.scss";
import "./styles/fonts.scss";
import "./styles/colors.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/loader.scss";
import "./styles/fa.scss";
import app from "./js/app";
import {
  submitTrip,
  handleImageError,
  handleEditBtnClick,
  handleDeleteBtnClick,
  handleViewBtnClick,
} from "./js/eventHandlers";

console.log("Hello world!");
app();

export { submitTrip, handleImageError, handleEditBtnClick, handleDeleteBtnClick, handleViewBtnClick };
