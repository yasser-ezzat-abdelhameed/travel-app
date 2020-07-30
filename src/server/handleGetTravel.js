const axios = require("axios");
const { GEONAMES_USERNAME, WEATHERBIT_API_KEY, PIXABAY_API_KEY } = process.env;
const GEONAMES_BASE_URL = `http://api.geonames.org/postalCodeSearchJSON?maxRows=1&username=${GEONAMES_USERNAME}&placename=`;
const WEATHERBIT_BASE_URL = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHERBIT_API_KEY}&`;
const PIXABAY_BASE_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&image_type=photo&pretty=true&per_page=3&q=`;

module.exports = async ({ query: { destination } }, res) => {
  try {
    if (!destination) return res.json({ error: "destination must be provided in query params" });
    const {
      data: { postalCodes },
    } = await axios.get(GEONAMES_BASE_URL + destination);
    const [locationDetails] = postalCodes;
    if (!locationDetails) return res.json({ error: "couldn't fetch location data with the provided destination" });
    const { lat, lng } = locationDetails;
    const { data: weatherDetails } = await axios.get(WEATHERBIT_BASE_URL + `lat=${lat}&lon=${lng}&days=1`);
    if (!(weatherDetails.data && weatherDetails.data.length))
      return res.json({ error: "couldn't fetch weather data for the provided destination" });
    const {
      data: { hits },
    } = await axios.get(PIXABAY_BASE_URL + destination.replace(" ", "+"));
    let imageUrl = "";
    if (hits && hits.length) [{ webformatURL: imageUrl }] = hits;
    return res.json({ locationDetails, weatherDetails, imageUrl });
  } catch (e) {
    console.log(e);
    return res.json({ error: e.message });
  }
};
