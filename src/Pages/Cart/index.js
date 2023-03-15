import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  DELETE_SINGLE_DATA_TO_CART,
  DELETE_All_FROM_CART,
  DELETE_FROM_CART,
} from "../../Redux/Actions";
import * as MyConstants from "../../Constants/Config";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const Cart = () => {
  let currency_symbol = MyConstants.currency_symbol;
  let CartTotalPrice = 0;

  // States
  const [product_quantity] = useState(1);

  // GetDataFromCart
  const GetDataFromCart = useSelector((State) => State.CartReducer.CARTS_DATA);
  console.log("GetDataFromCart ::", GetDataFromCart);

  // Dispatch
  const Dispatch = useDispatch();

  // AddDataToCart
  const AddDataToCart = (e, product_quantity) => {
    console.log("AddDataToCart", e);
    console.log("AddDataToCartQuantity", product_quantity);

    Dispatch(ADD_TO_CART(e, product_quantity));
  };

  // DeleteSingleDataFromCart
  const DeleteSingleDataFromCart = (e, product_quantity) => {
    console.log("DeleteSingleDataFromCart", e);

    Dispatch(DELETE_SINGLE_DATA_TO_CART(e, product_quantity));
  };

  // DeleteDataFromCart
  const DeleteDataFromCart = (id) => {
    console.log("DeleteDataFromCart", id);

    Dispatch(DELETE_FROM_CART(id));
  };

  // DeleteAllDataFromCart
  const DeleteAllDataFromCart = () => {
    Dispatch(DELETE_All_FROM_CART());
  };

  // eslint-disable-next-line no-lone-blocks
  {
    // eslint-disable-next-line array-callback-return
    GetDataFromCart.map((item) => {
      // eslint-disable-next-line no-lone-blocks
      {

        CartTotalPrice +=
          item.quantity * item.price;
      }
    });
  }
  return (
    <Fragment>
      {/* Cart Headings */}
      <Container className="mt-4 mb-5">
        <p className="main_heading_text">cart</p>
        {GetDataFromCart.length >= 1 ? (
          <>
            <Row className="mt-5">
              <Col md={12} sm={12}>
                <Table striped hover className="mb-0 cart_table">
                  <thead className="bg-dark text-light">
                    <tr>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Product Quantity</th>
                      <th>Sub Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GetDataFromCart.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="cart_table_image">
                              <Link to={"product_detail/" + item.id}>
                                <img
                                  alt="product_image"
                                  src={item.image}
                                  className="img-fluid rounded"
                                />
                              </Link>
                            </div>
                          </td>
                          <td class>{item.name}</td>
                          <td className="cart_table_product_price">
                            <span className="original_price">
                              {currency_symbol + item.price}
                            </span>
                          </td>
                          <td style={{ width: "200px" }}>
                            <InputGroup>
                              <InputGroup.Text className="cart_table_quantity_input" onClick={() => DeleteSingleDataFromCart(item, product_quantity)}>
                                -
                              </InputGroup.Text>
                              <Form.Control
                                className="cart_table_product_quantity_input"
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <InputGroup.Text
                                className="cart_table_quantity_input"
                                onClick={() =>
                                  AddDataToCart(item, product_quantity)
                                }
                              >
                                +
                              </InputGroup.Text>
                            </InputGroup>
                          </td>
                          <td>
                            {currency_symbol + item.quantity * item.price}
                          </td>
                          <td className="single_Cart_table_data_delete">
                            <AiFillCloseCircle
                              onClick={() => DeleteDataFromCart(item.id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={12} sm={12}>
                <Link
                  to="/"
                  type="button"
                  className="cart_continue_shopping_button"
                >
                  continue shopping
                </Link>
                <Button
                  type="button"
                  variant="dark"
                  className="cart_clear_shopping_button float-end"
                  onClick={() => DeleteAllDataFromCart()}
                >
                  clear shopping cart
                </Button>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col className="offset-7 md-5">
                <Card className="cart_bottom_card">
                  <Card.Title class="title">
                    <h4 className="text">Cart Total</h4>
                  </Card.Title>

                  <h4 className="total_amount">
                    Grand Total <span>{currency_symbol + CartTotalPrice}</span>
                  </h4>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Row className="mt-5">
            <Col sm={12}>
              <div className="text-center">
                <GiShoppingCart className="empty_cart_Icon" />
                <div className="text_content">
                  No items found in cart <br />
                  <Link
                    to="/"
                    type="button"
                    className="cart_continue_shopping_button"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Cart;
