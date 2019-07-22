import axios from "axios";

export function setSearchField(characters) {
  return axios
    .get(
      `https://futuramaapi.herokuapp.com/api/v2/characters?search=${
        characters.name
      })`
    )
    .then(response => {
      return {
        type: "SEARCH_DATA",
        data: response.data
      };
    });
}

export function closeSearchResults() {
  return {
    type: "CLOSE_SEARCH_RESULTS"
  };
}

export function quotes(quotes) {
  return axios
    .get(`https://futuramaapi.herokuapp.com/api/characters/${quotes.name}`)
    .then(response => {
      return {
        type: "QUOTES_DATA",
        data: response.data
      };
    });
}

// import { CHANGE_SEARCH_FIELD } from "./constants.js";

// export const setSearchField = text => ({
//   type: CHANGE_SEARCH_FIELD,
//   payload: text
// });
