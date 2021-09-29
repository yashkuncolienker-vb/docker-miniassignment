const initialState = {
  incart: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToCart':
      return {
        incart: [...state.incart, action.payload],
        count: state.count + 1,
      };
    case 'dropFromCart':
      const del_index = state.incart.indexOf(action.payload);
      return {
        incart: [
          ...state.incart.slice(0, del_index),
          ...state.incart.slice(del_index + 1),
        ],
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
