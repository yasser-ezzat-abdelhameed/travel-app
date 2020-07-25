export default function renderTripDetails() {
  const tripDetailsElm = document.createElement("div");
  tripDetailsElm.textContent = "trip-details";
  const mainElm = document.querySelector("#main");
  mainElm.innerHTML = "";
  mainElm.appendChild(tripDetailsElm);
}
