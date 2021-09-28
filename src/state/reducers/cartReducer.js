const initialState = {
  incart: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'buy':
      const condition = state.incart.includes(action.payload);
      return {
        incart: condition
          ? [...state.incart]
          : [...state.incart, action.payload],
        count: condition ? state.count : state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;
