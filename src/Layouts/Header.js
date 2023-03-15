import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import CartMenuCard from "../ReuseableComponents/CartMenuCard";
import { useSelector } from "react-redux";

const Header = () => {
  // States
  const [cart_menu_card, setCartMenuCard] = useState(false);

  // onCartHandleClick
  const onCartHandleClick = () => {
    if (cart_menu_card === false) {
      return setCartMenuCard(true);
    } else {
      return setCartMenuCard(false);
    }
  };

  // UseSelector
  const GetDataFromCart = useSelector((State) => State.CartReducer.CARTS_DATA);

  return (
    <Container>
      <Row>
        <Col>
          {/* Logo */}
          <Link to="/">
            <p className="logo_text">ShoppingCart.</p>
          </Link>
        </Col>

        <Col>
          {/* Icons */}
          <div className="d-flex justify-content-end pt-2 pt-md-2">
            <FiShoppingCart
              className="cart_icon_header"
              onClick={onCartHandleClick}
            />
            <span className="badge_header">
              {GetDataFromCart.length < 10 ? GetDataFromCart.length : "9+"}
            </span>
          </div>
          <Row>
            <Col>{cart_menu_card === true ? <CartMenuCard /> : ""}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
