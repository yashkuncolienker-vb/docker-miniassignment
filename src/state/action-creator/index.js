export const addToCart = (bot_id) => {
  return (dispatch) => {
    dispatch({
      type: 'buy',
      payload: bot_id,
    });
  };
};
