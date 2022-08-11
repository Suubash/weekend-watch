import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
