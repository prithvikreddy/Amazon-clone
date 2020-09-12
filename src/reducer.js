export const initialState = {
  basket: [
    {
      id: "1",
      title:
        "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!llo",
      price: 10.39,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg",
    },
  ],
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
