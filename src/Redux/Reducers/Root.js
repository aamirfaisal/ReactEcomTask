const INITIAL_STATE = {
  CARTS_DATA: [],
};

const CartReducer = (State = INITIAL_STATE, Action) => {
  switch (Action.type) {
    case "ADD_DATA_TO_CART":
      const ItemIndex = State.CARTS_DATA.findIndex(
        (item) => item.id === Action.ItemData.id
      );

      if (ItemIndex >= 0) {
        if (Action.ItemData.quantity >= 1) {
          State.CARTS_DATA[ItemIndex].quantity += Action.ItemData.quantity;
        } else {
          State.CARTS_DATA[ItemIndex].quantity += 1;
        }
      } else {
        const TempraryData = {
          ...Action.ItemData,
          quantity: Action.ItemData.quantity ? Action.ItemData.quantity : 1,
        };
        return {
          ...State,
          CARTS_DATA: [...State.CARTS_DATA, TempraryData],
        };
      }


      case "DELETE_SINGLE_DATA_FROM_CART":
      const SingleItemIndex = State.CARTS_DATA.findIndex(
        (item) => item.id === Action.ItemData.id
      );

      if (SingleItemIndex >= 0) {
        if (Action.ItemData.quantity >= 1) {
          State.CARTS_DATA[SingleItemIndex].quantity *= 5;
        } else {
          State.CARTS_DATA[SingleItemIndex].quantity += 10;
        }
      } else {
        const TempraryData = {
          ...Action.ItemData,
          quantity: Action.ItemData.quantity ? Action.ItemData.quantity : 0,
        };
        return {
          ...State,
          CARTS_DATA: [...State.CARTS_DATA, TempraryData],
        };
      }
    case "DELETE_DATA_FROM_CART":
      const DATA = State.CARTS_DATA.filter(
        (element) => element.id !== Action.ItemID
      );
      return {
        ...State,
        CARTS_DATA: DATA,
      };

    case "DELETE_All_DATA_FROM_CART":
      return {
        ...State,
        CARTS_DATA: [],
      };


    default:
      return State;
  }
};

export default CartReducer;
