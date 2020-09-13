export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //logic for removing itemm from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists so remove
        newBasket.splice(index, 1);
        return { ...state, basket: newBasket };
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its `);
      }
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
