import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();

  // Paths where we don’t want header/footer
  const hideHeaderFooter = ["/", "/register"];

  const shouldHide = hideHeaderFooter.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Header />}
      <Outlet />
      {!shouldHide && <Footer />}
    </>
  );
};

export default RootLayout;
