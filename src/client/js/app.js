import store from "./store";
import VIEWS from "./views";
import renderTripList from "./components/trip-list";
import renderTripDetails from "./components/trip-details";
import renderTripForm from "./components/trip-form";

export default function app() {
  store.subscribe(() => {
    const storedState = JSON.parse(localStorage.getItem("state"));
    if (
      !storedState ||
      (storedState && store.getState().currentView !== storedState.currentView) ||
      store.getState().trips.length !== storedState.trips.length
    ) {
      renderCurrentView();
    }
    localStorage.setItem("state", JSON.stringify(store.getState()));
  });
  renderCurrentView();
}

function renderCurrentView() {
  switch (store.getState().currentView) {
    case VIEWS.HOME: {
      renderTripList();
      break;
    }
    case VIEWS.TRIP_FORM: {
      renderTripForm();
      break;
    }
    case VIEWS.TRIP_DETAILS: {
      renderTripDetails();
      break;
    }
    default: {
      renderTripList();
      break;
    }
  }
}
