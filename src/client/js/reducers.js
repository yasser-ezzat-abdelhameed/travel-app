import { RECEIVE_TRIPS, ADD_TRIP, REMOVE_TRIP, SET_CURRENT_VIEW } from "./actions";

export function trips(state = [], action) {
  switch (action.type) {
    case RECEIVE_TRIPS:
      return [...action.trips];
    case ADD_TRIP:
      return state.concat([action.trip]);
    case REMOVE_TRIP:
      return state.filter((trip) => trip.id !== action.id);
    default:
      return state;
  }
}

export function currentView(state = "", action) {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return action.currentView;
    default:
      return state;
  }
}
