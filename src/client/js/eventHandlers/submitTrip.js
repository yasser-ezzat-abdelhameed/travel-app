import store from "../store";
import { ADD_TRIP, SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function submitTrip(event) {
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

  store.dispatch({
    type: ADD_TRIP,
    trip: {
      destination,
      startDate,
      endDate,
      hotel,
      notes,
      todoList,
    },
  });
  store.dispatch({
    type: SET_CURRENT_VIEW,
    currentView: VIEWS.HOME,
  });
}
