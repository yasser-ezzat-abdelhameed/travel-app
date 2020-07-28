import store from "../store";
import { SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";
import renderTripCard from "./trip-card";

export default function renderTripList() {
  /* Element creation */
  const component = document.createElement("div");
  component.setAttribute("id", "home");
  component.innerHTML = `
    <div id="trip-list-container"></div>
    <button class="floating-action-btn" id="add-trip-btn">+</button>
  `;

  /* Appending to DOM */
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(component);

  /* Handling dynamic data */
  const tripListContainerElm = document.querySelector("#trip-list-container");
  const { trips } = store.getState();
  if (trips && trips.length) {
    const fragment = document.createDocumentFragment();
    for (let trip of trips) {
      fragment.appendChild(renderTripCard(trip));
    }
    tripListContainerElm.appendChild(fragment);
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
