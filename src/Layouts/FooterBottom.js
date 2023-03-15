import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <Container>
      <Row>
        <Col className="col-12">
          <p className="m-0">
            Copyright © 2023{" "}
            <Link to="https://xpertsgroup.net" className="footer_website_link">
              XpertSpot
            </Link>
            . All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterBottom;
