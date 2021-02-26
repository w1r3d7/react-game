
const initialState = {
  chosenSign: null,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIGN':
      return {
        ...state,
        chosenSign: action.payload
      };
    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 1
      };
    case 'DECREASE_SCORE':
      return {
        ...state,
        score: state.score - 1
      };
    default:
      return state;
  }
};

export default reducer;