import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLeftSection from "../ReuseableComponents/FooterLeftSection";
import FooterUseFullLinksSection from "../ReuseableComponents/FooterUseFullLinksSection";
import FooterContactInfoSection from "../ReuseableComponents/FooterContactInfoSection";

const Footer = () => {
  return (
    <Container>
      <Row>
        {/* FooterLeftSection */}
        <Col className="col-12 col-md-6 col-lg-4">
          <FooterLeftSection />
        </Col>

        {/* Second Section */}
        <Col className="col-12 col-md-6 col-lg-3 offset-lg-1">
          <FooterUseFullLinksSection />
        </Col>

        {/* Third Section */}
        <Col className="col-12 col-md-6 col-lg-4">
          <FooterContactInfoSection />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
