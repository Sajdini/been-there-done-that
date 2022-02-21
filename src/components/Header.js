import React from "react";
import ButtonAppBar from "./navbar";
const Header = (props) => {
  return (
    <>
      <ButtonAppBar />
      {props.children}
    </>
  );
};

export default Header;
