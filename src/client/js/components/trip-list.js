import store from "../store";
import { SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function renderTripList() {
  /* Element creation */
  const component = document.createElement("div");
  component.innerHTML = `
    <div>
      <div id="trip-list-container"></div>
      <button class="floating-action-btn" id="add-trip-btn">+</button>
    </div>
  `;

  /* Appending to DOM */
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(component);

  /* Handling dynamic data */
  const tripListContainerElm = document.querySelector("#trip-list-container");
  const { trips } = store.getState();
  if (trips && trips.length) {
    tripListContainerElm.textContent = `There are ${trips.length} added!`;
  } else {
    tripListContainerElm.textContent = "There are no trips added!";
  }

  /* Event listeners */
  document.querySelector("#add-trip-btn").addEventListener("click", () => {
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.TRIP_FORM,
    });
  });
}
