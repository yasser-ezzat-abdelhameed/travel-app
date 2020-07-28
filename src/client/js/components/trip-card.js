export default function renderTripCard(trip) {
  const tripCardElm = document.createElement("div");
  tripCardElm.className = "todo-card";
  tripCardElm.style = `background-image: url("${trip.imageUrl}")`;
  tripCardElm.innerHTML = `
    <div class="todo-card-main">
      <img width="50" src="https://www.weatherbit.io/static/img/icons/${trip.weatherDetails.data[0].weather.icon}.png" alt="weather-icon" />
    </div>
    <div class="todo-card-controls">
      <div>V</div>
      <div>E</div>
      <div>D</div>
    </div>
    <div class="todo-card-footer">${trip.destination}</div>
  `;
  return tripCardElm;
}
