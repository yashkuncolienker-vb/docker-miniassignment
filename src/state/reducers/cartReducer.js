const initialState = {
  incart: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'buy':
      return {
        //If item exists in cart cartMiddleware in store.js prevents increment of count and addition to incart
        incart: [...state.incart, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;
