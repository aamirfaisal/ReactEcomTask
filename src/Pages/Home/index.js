import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductsData from "../../Data/ProductsData.json";
import * as MyConstants from "../../Constants/Config";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../Redux/Actions";

const Home = () => {

   // Dispatch
   const Dispatch = useDispatch();

   // AddDataToCart
   const AddDataToCart = (e) => {
     console.log("AddDataToCart", e);
 
     Dispatch(ADD_TO_CART(e));
   };

  return (
    <Fragment>
      {/* Products Headings */}
      <Container>
        <Row>
          <Col>
            <p className="main_heading_text">products</p>

            {/* Product Cards */}
            <Row className="mt-md-5 pt-md-4 mt-2 pt-2">
              {ProductsData.map((item, index) => {
                return (
                  <Col lg={4} md={6} sm={12} className="mt-3 mt-lg-0 mb-3" key={index}>
                    <Card className="product_card">
                      <Card.Header className="p-0 border-0 product_card_header">
                        <Link to={"/product_detail/" + item.id}>
                          <Card.Img
                            variant="top"
                            className="product_card_image"
                            src={process.env.PUBLIC_URL + item.image}
                            alt="product_card_image"
                          />
                        </Link>
                      </Card.Header>

                      <hr className="mx-3" />

                      <Card.Body className="mt-0 pt-0 mx-1">
                        <Row>
                          <Col sm={12} md={6} className="mt-3 mt-md-0">
                            <Link to={"/product_detail/" + item.id}>
                              <Card.Title className="product_name_heading">
                                {item.name}
                              </Card.Title>
                            </Link>
                          </Col>
                          <Col sm={12} md={6} className="mt-3 mt-md-0">
                            <Card.Title className="product_price">
                              {MyConstants.currency_symbol + item.price}
                            </Card.Title>
                          </Col>
                        </Row>
                      </Card.Body>
                      <Card.Footer className="ProductCardFooter mt-0">
                        <Row>
                          <Col>
                            <Button
                              variant="dark"
                              className="add_to_cart_button w-100"
                              onClick={() => AddDataToCart(item)}
                            >
                              Add To Cart
                            </Button>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
