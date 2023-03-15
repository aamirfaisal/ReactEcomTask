import React, { Fragment, useEffect } from "react";
import "../Assets/css/styles.css";
import "../Assets/css/responsive.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const MainLayout = () => {
  // isHeaderSticky
  const isHeaderSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is_header_sticky")
      : header.classList.remove("is_header_sticky");
  };

  // Sticky Header Area
  useEffect(() => {
    window.addEventListener("scroll", isHeaderSticky);
    return () => {
      window.removeEventListener("scroll", isHeaderSticky);
    };
  });
  return (
    <Fragment>
      {/* Header */}
      <div className="header py-3">
        <Header />
      </div>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <div className="footer py-5">
        <Footer />
      </div>

      {/* FooterBottom */}
      <div className="footer_bottom py-3">
        <FooterBottom />
      </div>
    </Fragment>
  );
};

export default MainLayout;
