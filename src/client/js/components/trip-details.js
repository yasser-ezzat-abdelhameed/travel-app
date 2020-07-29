import store from "../store";

export default function renderTripDetails() {
  const { selectedTripId, trips } = store.getState();
  const trip = { ...trips.find((item) => item.id === selectedTripId) };
  const tripDetailsElm = document.createElement("div");
  tripDetailsElm.id = "trip-details";
  tripDetailsElm.innerHTML = `
    <div class="header-image"></div>
    <div class="info">
      <div><i class="fa fa-plane"></i></div>
      <div>${trip.destination}</div>
      <div><i class="fa fa-calendar"></i></div>
      <div>${trip.startDate}</div>
      <div><i class="fa fa-clock-o"></i></div>
      <div>${trip.endDate ? (new Date(trip.endDate) - new Date(trip.startDate)) / (1000 * 60 * 60 * 24) + " days" : "Unknown"}</div>
      <div><i class="fa fa-home"></i></div>
      <div>${trip.hotel || "Not specified"}</div>
      <div><i class="fa fa-sticky-note"></i></div>
      <div>${trip.notes || "Not specified"}</div>
      <div><i class="fa fa-list"></i></div>
      <div>${trip.todoList.length ? trip.todoList.map((item) => "<div>" + item + "</div>") : "No items added"}</div>
    </div>
  `;
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(tripDetailsElm);

  document.querySelector(".header-image").style.backgroundImage = `url("${trip.imageUrl}")`;
}
