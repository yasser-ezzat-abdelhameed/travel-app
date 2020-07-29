import store from "../store";
import { REMOVE_TRIP } from "../actions";

export default function handleDeleteBtnClick(_, tripId) {
  const shouldDelete = confirm("Are you sure you want to remove this trip?");
  if (shouldDelete) {
    store.dispatch({
      type: REMOVE_TRIP,
      id: tripId,
    });
  }
}
