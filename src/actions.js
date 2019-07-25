import axios from "axios";

export function search(name) {
  return axios
    .get(`https://futuramaapi.herokuapp.com/api/v2/characters`, {
      params: { search: name }
    })
    .then(response => {
      return {
        type: "SEARCH_DATA",
        data: response.data
      };
    });
}

export function loadQuotes(characterName) {
  return axios
    .get(`https://futuramaapi.herokuapp.com/api/characters/${characterName}`)
    .then(response => {
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
