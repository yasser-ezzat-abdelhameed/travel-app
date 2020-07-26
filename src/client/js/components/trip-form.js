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
        <label for="destination">Destination</label>
        <input type="text" id="destination" name="destination" />
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
}
