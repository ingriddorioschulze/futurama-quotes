const INITIAL_STATE = {
  searchField: "",
  characters: [],
  quotes: null
};

export function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SEARCH_DATA") {
    return {
      ...state,
      characters: action.data
    };
  } else {
    return state;
  }
}
