import store from "../store";
import { SET_CURRENT_VIEW, REMOVE_SELECTED_TRIP_ID } from "../actions";
import VIEWS from "../views";

export default function renderHeader() {
  const { currentView } = store.getState();
  const header = document.querySelector("#header");
  if (currentView === VIEWS.HOME) {
    header.innerHTML = `
      <div>Trip List</div>
    `;
  } else {
    header.innerHTML = `
      <div>
        <span class="back-btn"><i class="fa fa-arrow-left"></i></span>
        <span>${renderHeaderText()}</span>
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

function renderHeaderText() {
  const { currentView, selectedTripId } = store.getState();
  if (currentView === VIEWS.TRIP_DETAILS) {
    const { trips } = store.getState();
    const { destination } = trips.find((item) => item.id === selectedTripId);
    return destination;
  } else {
    return (selectedTripId ? "Edit" : "Create") + " Trip";
  }
}
