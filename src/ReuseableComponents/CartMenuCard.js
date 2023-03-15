import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import * as MyConstants from "../Constants/Config";
import { DELETE_FROM_CART } from "../Redux/Actions";

const CartMenuCard = () => {
  let CartTotalPrice = 0;

  // GetDataFromCart
  const GetDataFromCart = useSelector((State) => State.CartReducer.CARTS_DATA);
  console.log("GetDataFromCartOpen ::", GetDataFromCart);

  // Dispatch
  const Dispatch = useDispatch();

  // DeleteDataFromCart
  const DeleteDataFromCart = (id) => {
    console.log("DeleteDataFromCart", id);

    Dispatch(DELETE_FROM_CART(id));
  };
  return (
    <Card className="cart_menu_card text-dark">
      {GetDataFromCart.length >= 1 ? (
        <Card.Body className="text-center p-3">
          <div className="cart_menu_data">
            {GetDataFromCart.map((item, index) => {
              CartTotalPrice += item.quantity * item.price;
              return (
                <div className="single_cart_data" key={index}>
                  <div className="single_cart_data_image">
                    <Link to={"product_detail/" + item.id}>
                      <img
                        alt="product_image"
                        src={item.image}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="single_cart_data_content">
                    <h4>
                      <Link to={"product_detail/" + item.id}>{item.name}</Link>
                    </h4>
                    <h6>Qty: {item.quantity}</h6>
                    <span>
                      Sub-Total:
                      {MyConstants.currency_symbol + item.quantity * item.price}
                    </span>
                  </div>

                  <div className="single_cart_data_delete">
                    <AiFillCloseCircle
                      onClick={() => DeleteDataFromCart(item.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart_menu_data_total">
            <h4>
              Total :{" "}
              <span>{MyConstants.currency_symbol + CartTotalPrice}</span>
            </h4>
          </div>

          <Link
            to="/cart"
            type="button"
            className="cart_menu_card_button w-100"
          >
            view cart
          </Link>
        </Card.Body>
      ) : (
        <Card.Body className="text-center p-3">
          <h6 className="p-0 m-0">No items added to cart!</h6>
        </Card.Body>
      )}
    </Card>
  );
};

export default CartMenuCard;
