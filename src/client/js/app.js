import store from "./store";
import { ADD_TRIP, SET_CURRENT_VIEW } from "./actions";
import VIEWS from "./views";
import renderTripList from "./components/trip-list";
import renderTripDetails from "./components/trip-details";
import renderTripForm from "./components/trip-form";

export default function app() {
  store.subscribe(() => {
    console.log("The new state is: ", store.getState());
    localStorage.setItem("state", JSON.stringify(store.getState()));
    renderCurrentView();
  });
  renderCurrentView();
}

function renderCurrentView() {
  console.log("renderCurrentView:::", store.getState().currentView);
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
