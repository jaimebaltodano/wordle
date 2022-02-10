import axios from "axios";

axios.defaults.baseURL = "https://random-words5.p.rapidapi.com";
const config = {
  params: { count: "5", wordLength: '5' },
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST,
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

axios.interceptors.response.use(async (response) => {
  try {
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const responseBody = (response) => {return response.data};

const requests = {
  get: (url, config) => axios.get(url, config).then(responseBody),
};

const wordle = {
  list: () => requests.get("/getMultipleRandom", config),
};

const Service = {
  wordle,
};

export default Service;
