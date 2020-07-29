import store from "../store";
import { SET_SELECTED_TRIP_ID, SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function handleViewBtnClick(_, tripId) {
  store.dispatch({
    type: SET_SELECTED_TRIP_ID,
    selectedTripId: tripId,
  });
  store.dispatch({
    type: SET_CURRENT_VIEW,
    currentView: VIEWS.TRIP_DETAILS,
  });
}
