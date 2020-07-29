import store from "../store";
import { EDIT_TRIP_IMAGE } from "../actions";

export default function handleImageError(_, tripId) {
  const trip = store.getState().trips.find((item) => item.id === tripId);
  fetch(`http://localhost:5000/image?destination=${trip.destination}`)
    .then((response) => response.json())
    .then(({ imageUrl }) => {
      const tripCardElm = document.querySelector(`#tc-${tripId}`);
      if (tripCardElm && imageUrl) {
        tripCardElm.style = `background-image: url("${imageUrl}")`;
        store.dispatch({
          type: EDIT_TRIP_IMAGE,
          payload: { id: trip.id, imageUrl },
        });
      }
    });
}
