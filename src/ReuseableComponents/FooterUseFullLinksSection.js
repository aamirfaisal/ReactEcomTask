import React from "react";
import { Link } from "react-router-dom";

const FooterUseFullLinksSection = () => {
  return (
    <>
      <p className="footer_section_headings">usefull links</p>

      {/* List Items */}
      <ul className="footer_list_item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </>
  );
};

export default FooterUseFullLinksSection;
