const initialState = {
  incart: {},
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToCart':
      const isInCart = Object.keys(state.incart).includes(action.payload);
      const countInCart = isInCart ? state.incart[action.payload] + 1 : 1;
      return {
        incart: { ...state.incart, [action.payload]: countInCart },
        count: state.count + 1,
      };
    case 'dropFromCart':
      const newCart = {
        ...state.incart,
        [action.payload]: state.incart[action.payload] - 1,
      };
      const countIsZero = state.incart[action.payload] === 1;
      countIsZero && delete newCart[action.payload];
      return {
        incart: { ...newCart },
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
