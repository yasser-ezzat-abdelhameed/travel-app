import store from "../store";
import { SET_CURRENT_VIEW, REMOVE_SELECTED_TRIP_ID } from "../actions";
import VIEWS from "../views";
import renderTodoFormElement from "./todo-form-element";

export default function renderTripForm() {
  /* Preparing data */
  let trip = {
    destination: "",
    startDate: "",
    endDate: "",
    hotel: "",
    notes: "",
    todoList: "",
  };
  const { selectedTripId } = store.getState();
  if (selectedTripId) {
    const { trips } = store.getState();
    trip = { ...trips.find((item) => item.id === selectedTripId) };
  }

  /* Element creation */
  const renderTripForm = document.createElement("div");
  renderTripForm.innerHTML = `
    <button id="back">Go back</button>
    <form name="trip-form" id="trip-form" onsubmit="return Client.submitTrip(event)">
      <section class="form-group">
        <label for="destination">Place</label>
        <input type="text" id="destination" name="destination" value="${trip.destination}" required />
      </section>
      <section class="form-group">
        <label for="start-date">From</label>
        <input type="date" id="start-date" name="start-date" value="${trip.startDate}" required />
      </section>
      <section class="form-group">
        <label for="end-date">To</label>
        <input type="date" id="end-date" name="end-date" value="${trip.endDate}" />
      </section>
      <section class="form-group">
        <label for="hotel">Hotel</label>
        <input type="text" id="hotel" name="hotel" value="${trip.hotel}" />
      </section>
      <section class="form-group">
        <label for="todo-btn">Todo</label>
        <button type="text" id="todo-btn" name="todo-btn">+ Add item</button>
      </section>
      <ul id="todo-list"></ul>
      <section class="form-group">
        <label for="notes">Notes</label>
        <textarea rows="6" id="notes" name="notes">${trip.notes}</textarea>
      </section>
      <input type="submit" value="${selectedTripId ? "Edit Trip" : "Create Trip"}" />
    </form>
  `;

  /* Appending to DOM */
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(renderTripForm);

  /* Handling dynamic data */
  for (let todo of trip.todoList) {
    renderTodoFormElement(todo);
  }

  /* Event listeners */
  document.querySelector("#back").addEventListener("click", () => {
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.HOME,
    });
    store.dispatch({
      type: REMOVE_SELECTED_TRIP_ID,
    });
  });

  document.querySelector("#todo-btn").addEventListener("click", (event) => {
    event.preventDefault();
    renderTodoFormElement();
  });
}
