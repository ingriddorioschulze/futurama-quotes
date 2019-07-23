import axios from "axios";

export function search(name) {
  return axios
    .get(`https://futuramaapi.herokuapp.com/api/v2/characters`, {
      params: { search: name }
    })
    .then(response => {
      console.log(response);
      return {
        type: "SEARCH_DATA",
        data: response.data
      };
    });
}

export function loadQuotes(characterName) {
  console.log("loading quotes from API", characterName);
  return axios
    .get(`https://futuramaapi.herokuapp.com/api/characters/${characterName}`)
    .then(response => {
      console.log("got quotes from the API");
      return {
        type: "QUOTES_DATA",
        data: response.data
      };
    });
}

export function closeQuotes() {
  return {
    type: "CLOSE_QUOTES"
  };
}
