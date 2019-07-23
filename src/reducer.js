const INITIAL_STATE = {
  characters: [],
  quotes: null
};

export function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SEARCH_DATA") {
    return {
      ...state,
      characters: action.data
    };
  } else if (action.type === "QUOTES_DATA") {
    return {
      ...state,
      quotes: action.data
    };
  } else {
    return state;
  }
}
