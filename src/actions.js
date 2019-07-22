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

// export function quotes(quotes) {
//   return axios
//     .get(`https://futuramaapi.herokuapp.com/api/characters/${quotes.name}`)
//     .then(response => {
//       return {
//         type: "QUOTES_DATA",
//         data: response.data
//       };
//     });
// }
