import store from "../store";
import { ADD_TRIP, SET_CURRENT_VIEW } from "../actions";
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
    const response = await fetch(`http://localhost:5000/travel?destination=${destination}`, {
      method: "GET",
    });
    const { locationDetails, weatherDetails, imageUrl, error } = await response.json();
    if (error) return alert(error);
    store.dispatch({
      type: ADD_TRIP,
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
      },
    });
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.HOME,
    });
    loaderElm.className = "loading-indicator hide";
  } catch (e) {
    console.log(e);
    alert(e.message);
    loaderElm.className = "loading-indicator hide";
  }
}
