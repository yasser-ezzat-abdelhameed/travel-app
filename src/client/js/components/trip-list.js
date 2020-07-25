import store from "../store";
import { SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function renderTripList() {
  console.log("renderTripList");
  const tripListElm = document.createElement("div");
  tripListElm.innerHTML = `
    <div>
      <div>The list goes here!</div>
      <button id="go-to-form">Go to form</button>
    </div>
  `;
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(tripListElm);
  document.querySelector("#go-to-form").addEventListener("click", () => {
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.TRIP_FORM,
    });
  });
}
