export default function renderTripCard(trip) {
  const tripCardElm = document.createElement("div");
  tripCardElm.className = "todo-card";
  tripCardElm.id = "tc-" + trip.id;
  tripCardElm.style = `background-image: url("${trip.imageUrl}")`;
  tripCardElm.innerHTML = `
    <img
      style="display:none;" 
      src="${trip.imageUrl}"
      alt="main-img"
      onerror="return Client.handleImageError(event, ${trip.id})"
    />
    <div class="todo-card-main">
      <div class="info-container">
        <div class="info">
          <span class="leading">
            <img 
              src="https://www.weatherbit.io/static/img/icons/${trip.weatherDetails.data[0].weather.icon}.png"
              alt="weather-icon"
            />
          </span>
          <span class="trailing">${trip.weatherDetails.data[0].temp} &deg;</span>
        </div>
        <div class="info">
          <span class="leading">
            <i class="fa fa-calendar"></i>
          </span>
          <span class="trailing">${trip.startDate}</span>
        </div>
        <div class="info">
        <span class="leading">
          <i class="fa fa-home"></i>
        </span>
        <span class="trailing">${trip.hotel}</span>
        </div>
      </div>
    </div>
    <div class="todo-card-controls">
      <div><i class="fa fa-eye" onclick="return Client.handleViewBtnClick(event, ${trip.id})"></i></div>
      <div><i class="fa fa-pencil" onclick="return Client.handleEditBtnClick(event, ${trip.id})"></i></div>
      <div><i class="fa fa-trash" onclick="return Client.handleDeleteBtnClick(event, ${trip.id})"></i></div>
    </div>
    <div class="todo-card-footer">${trip.destination}</div>
  `;
  return tripCardElm;
}
