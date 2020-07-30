const axios = require("axios");
const { PIXABAY_API_KEY } = process.env;
const PIXABAY_BASE_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&image_type=photo&pretty=true&per_page=3&q=`;

module.exports = async ({ query: { destination } }, res) => {
  try {
    if (!destination) return res.json({ error: "destination must be provided in query params" });
    const {
      data: { hits },
    } = await axios.get(PIXABAY_BASE_URL + destination.replace(" ", "+"));
    let imageUrl = "";
    if (hits && hits.length) [{ webformatURL: imageUrl }] = hits;
    return res.json({ imageUrl });
  } catch (e) {
    console.log(e);
    return res.json({ error: e.message });
  }
};
