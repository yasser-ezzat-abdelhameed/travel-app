import { trips, currentView, selectedTripId } from "./reducers";

function initState() {
  try {
    const storedState = localStorage.getItem("state");
    return JSON.parse(storedState) || {};
  } catch (e) {
    return {};
  }
}

function createStore(reducer) {
  let state = initState();
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

function app(state = {}, action) {
  return {
    trips: trips(state.trips, action),
    currentView: currentView(state.currentView, action),
    selectedTripId: selectedTripId(state.selectedTripId, action),
  };
}

const store = createStore(app);

export default store;
