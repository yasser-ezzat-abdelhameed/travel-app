import store from "../store";
import { ADD_TRIP, SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function submitTrip(event) {
  event.preventDefault();
  const destination = document.querySelector("#destination").value;
  store.dispatch({
    type: ADD_TRIP,
    trip: {
      destination,
    },
  });
  store.dispatch({
    type: SET_CURRENT_VIEW,
    currentView: VIEWS.HOME,
  });
}
