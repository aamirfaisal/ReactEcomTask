import React from "react";
import { Link } from "react-router-dom";

const FooterLeftSection = () => {
  return (
    <>
      {/* Logo */}
      <Link to="/">
        <p className="logo_text">ShoppingCart.</p>
      </Link>

      {/* Description */}
      <p className="logo_description mt-2">
        A website that allows people to buy and sell physical goods, services,
        and digital products over the internet rather than at a brick-and-mortar
        location.
      </p>
    </>
  );
};

export default FooterLeftSection;
