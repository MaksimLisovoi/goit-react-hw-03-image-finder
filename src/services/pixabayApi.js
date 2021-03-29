import axios from "axios";

async function getFetch(query, page) {
  // let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
  // let key = `563492ad6f917000010000013bbd01457a39431887d74f69015c0d48`;
  let key = `19973249-c52aafd5b7bc4f65352a2c6d7`;
  let baseURL = `https://pixabay.com/api/`;
  let searchUrl = `/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  let url = baseURL + searchUrl;
  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (err) {
    throw err;
  }
  // const response = await axios.get(url);
  // const data = response.data;

  // return data;
}

export default { getFetch };
