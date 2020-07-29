import store from "../store";
import { ADD_TRIP, EDIT_TRIP, SET_CURRENT_VIEW, REMOVE_SELECTED_TRIP_ID } from "../actions";
import VIEWS from "../views";

export default async function submitTrip(event) {
  event.preventDefault();
  const destination = document.querySelector("#destination").value;
  const startDate = document.querySelector("#start-date").value;
  const endDate = document.querySelector("#end-date").value;
  const hotel = document.querySelector("#hotel").value;
  const notes = document.querySelector("#notes").value;
  const todoElements = document.querySelectorAll("[name=todo-item]");
  const todoList = [];
  for (let { value } of todoElements) {
    todoList.push(value);
  }

  const loaderElm = document.querySelector(".loading-indicator");
  loaderElm.className = "loading-indicator";

  try {
    const { selectedTripId } = store.getState();
    const response = await fetch(`http://localhost:5000/travel?destination=${destination}`, {
      method: "GET",
    });
    const { locationDetails, weatherDetails, imageUrl, error } = await response.json();
    if (error) {
      alert(error);
    } else {
      store.dispatch({
        type: selectedTripId ? EDIT_TRIP : ADD_TRIP,
        trip: {
          destination,
          startDate,
          endDate,
          hotel,
          notes,
          todoList,
          locationDetails,
          weatherDetails,
          imageUrl,
          id: selectedTripId || Date.now(),
        },
      });
      store.dispatch({
        type: SET_CURRENT_VIEW,
        currentView: VIEWS.HOME,
      });
      store.dispatch({
        type: REMOVE_SELECTED_TRIP_ID,
      });
    }
    loaderElm.className = "loading-indicator hide";
  } catch (e) {
    console.log(e);
    alert(e.message);
    loaderElm.className = "loading-indicator hide";
  }
}
