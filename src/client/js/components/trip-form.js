import store from "../store";
import { SET_CURRENT_VIEW } from "../actions";
import VIEWS from "../views";

export default function renderTripForm() {
  /* Element creation */
  const renderTripForm = document.createElement("div");
  renderTripForm.innerHTML = `
    <button id="back">Go back</button>
    <form name="trip-form" id="trip-form" onsubmit="return Client.submitTrip(event)">
      <section class="form-group">
        <label for="destination">Place</label>
        <input type="text" id="destination" name="destination" required />
      </section>
      <section class="form-group">
        <label for="start-date">From</label>
        <input type="date" id="start-date" name="start-date" required />
      </section>
      <section class="form-group">
        <label for="end-date">To</label>
        <input type="date" id="end-date" name="end-date" />
      </section>
      <section class="form-group">
        <label for="hotel">Hotel</label>
        <input type="text" id="hotel" name="hotel" />
      </section>
      <section class="form-group">
        <label for="todo-btn">Todo</label>
        <button type="text" id="todo-btn" name="todo-btn">+ Add item</button>
      </section>
      <ul id="todo-list"></ul>
      <section class="form-group">
        <label for="notes">Notes</label>
        <textarea rows="6" id="notes" name="notes"></textarea>
      </section>
      <input type="submit" value="Submit" />
    </form>
  `;

  /* Appending to DOM */
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(renderTripForm);

  /* Handling dynamic data */

  /* Event listeners */
  document.querySelector("#back").addEventListener("click", () => {
    store.dispatch({
      type: SET_CURRENT_VIEW,
      currentView: VIEWS.HOME,
    });
  });

  document.querySelector("#todo-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const random = Date.now();
    const id = `todo-item-${random}`;
    const removeBtnId = `${id}-btn`;
    const todoItemElm = document.createElement("li");
    todoItemElm.innerHTML = `
      <section class="form-group todo-form-group">
        <input type="text" id="${id}" name="todo-item" />
        <button id="${removeBtnId}">-</button>
      </section>
    `;
    const todoListElm = document.querySelector("#todo-list");
    todoListElm.appendChild(todoItemElm);

    /* Event listeners */
    document.querySelector(`#${removeBtnId}`).addEventListener("click", (event) => {
      event.preventDefault();
      todoListElm.removeChild(todoItemElm);
    });
  });
}
