const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
