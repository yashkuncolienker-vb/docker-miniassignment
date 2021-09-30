const initialState = {
  incart: {},
  count: 0,
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case 'addToCart':
      const isItemInCart = Object.keys(state.incart).includes(payload);
      const itemCountInCart = isItemInCart ? state.incart[payload] + 1 : 1;
      return {
        incart: { ...state.incart, [payload]: itemCountInCart },
        count: state.count + 1,
      };

    case 'dropFromCart':
      const newCart = {
        ...state.incart,
        [payload]: state.incart[payload] - 1,
      };
      const isLastItem = state.incart[payload] === 1;
      isLastItem && delete newCart[payload];
      return {
        incart: { ...newCart },
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
