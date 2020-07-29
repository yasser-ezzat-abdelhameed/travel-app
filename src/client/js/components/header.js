import store from "../store";
import { SET_CURRENT_VIEW, REMOVE_SELECTED_TRIP_ID } from "../actions";
import VIEWS from "../views";

export default function renderHeader() {
  const { currentView, selectedTripId } = store.getState();
  const header = document.querySelector("#header");
  if (currentView === VIEWS.HOME) {
    header.innerHTML = `
      <div>Trip List</div>
    `;
  } else {
    header.innerHTML = `
      <div>
        <span class="back-btn"><i class="fa fa-arrow-left"></i></span>
        <span>${selectedTripId ? "Edit" : "Create"} Trip</span>
      </div>
    `;
    document.querySelector(".back-btn").addEventListener("click", (_) => {
      store.dispatch({
        type: SET_CURRENT_VIEW,
        currentView: VIEWS.HOME,
      });
      store.dispatch({
        type: REMOVE_SELECTED_TRIP_ID,
      });
    });
  }
}
