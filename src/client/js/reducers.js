import {
  RECEIVE_TRIPS,
  ADD_TRIP,
  EDIT_TRIP,
  REMOVE_TRIP,
  EDIT_TRIP_IMAGE,
  SET_CURRENT_VIEW,
  SET_SELECTED_TRIP_ID,
  REMOVE_SELECTED_TRIP_ID,
} from "./actions";

export function trips(state = [], action) {
  switch (action.type) {
    case RECEIVE_TRIPS:
      return [...action.trips];
    case ADD_TRIP:
      return state.concat([action.trip]);
    case REMOVE_TRIP:
      return state.filter((trip) => trip.id !== action.id);
    case EDIT_TRIP_IMAGE: {
      const { id, imageUrl } = action.payload;
      return state.map((trip) => ({ ...trip, imageUrl: trip.id === id ? imageUrl : trip.imageUrl }));
    }
    case EDIT_TRIP: {
      return state.map((trip) => (trip.id === action.trip.id ? { ...action.trip } : { ...trip }));
    }
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

export function selectedTripId(state = "", action) {
  switch (action.type) {
    case SET_SELECTED_TRIP_ID:
      return action.selectedTripId;
    case REMOVE_SELECTED_TRIP_ID:
      return "";
    default:
      return state;
  }
}
