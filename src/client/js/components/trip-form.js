import store from "../store";
import { SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function renderTripForm() {
  const renderTripForm = document.createElement("div");
  renderTripForm.innerHTML = `
    <div>
      <div>The form goes here</div>
      <button id="back">Go back</button>
    </div>
  `;
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(renderTripForm);
  document.querySelector("#back").addEventListener("click", () => {
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.HOME,
    });
  });
}
