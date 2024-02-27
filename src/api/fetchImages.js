import axios from "axios";
const fetchImages = async (setImages, query, page, setTotalHits) => {
  try {
    await axios
      .get(
        `https://pixabay.com/api/?key=42471683-d04c62f8ee2aa801544edc9ac&q=${query}&image_type=photo$lang=ru&page=${page}   `
      )
      .then((res) => {
        setImages(res.data.hits);
        setTotalHits(res.data.total);
      });
  } catch (error) {
    console.error("failed to fetch images from" + error);
  }
};

export default fetchImages;
