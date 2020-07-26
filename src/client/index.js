import "./styles/resets.scss";
import "./styles/fonts.scss";
import "./styles/colors.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import app from "./js/app";
import { submitTrip } from "./js/eventHandlers";

console.log("Hello world!");
app();

export { submitTrip };
