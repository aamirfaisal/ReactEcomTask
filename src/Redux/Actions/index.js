// ADD_TO_CART
export const ADD_TO_CART = (ItemData, product_quantity) => {
  console.log('AddToCartItemRedux ::', ItemData)
  console.log('AddToCartQuantityRedux ::', product_quantity)
  return {
    type: "ADD_DATA_TO_CART",
    ItemData: {
      ...ItemData,
      quantity: product_quantity,
    },
  };
};

// DELETE_SINGLE_DATA_TO_CART
export const DELETE_SINGLE_DATA_TO_CART = (ItemData, product_quantity) => {
  console.log('Remove ::', ItemData)
  return {
    type: "DELETE_SINGLE_DATA_FROM_CART",
    ItemData: {
      ...ItemData,
      quantity: product_quantity,
    },
  };
};

// DELETE_FROM_CART
export const DELETE_FROM_CART = (ItemID) => {
  return {
    type: "DELETE_DATA_FROM_CART",
    ItemID: ItemID,
  };
};

// DELETE_All_FROM_CART
export const DELETE_All_FROM_CART = () => {
  return {
    type: "DELETE_All_DATA_FROM_CART"
  }
};