import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

const FooterContactInfoSection = () => {
  return (
    <>
      <p className="footer_section_headings">contact info</p>

      {/* List Items */}
      <ul className="footer_list_item">
        <li>
          <Link to="mailto:info@shopping.com">
            <HiOutlineMail className="footer_list_item_icon" />
            shopping.cart@gmail.com
          </Link>
        </li>
        <li>
          <Link to="tel:03001234567">
            <HiOutlinePhone className="footer_list_item_icon" />
            03001234567
          </Link>
        </li>
        <li>
          <Link to="/">
            <GoLocation className="footer_list_item_icon" />
            Abu Dhabi, UAE
          </Link>
        </li>
      </ul>

      {/* Social Media List Items */}
      <ul className="footer_contact_info_social_media">
        <li>
          <Link to="#">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link to="#">
            <RiWhatsappFill />
          </Link>
        </li>
        <li>
          <Link to="#">
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link to="#">
            <AiOutlineTwitter />
          </Link>
        </li>
        <li>
          <Link to="#">
            <GrLinkedinOption />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FooterContactInfoSection;
