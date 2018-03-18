import React from "react";

const divStyle = {
  borderTop: "#FF611D",
  borderTStyle: "solid",
  borderTopWidth: "8px",
  position: "fixed",
  left: 0,
  bottom: 0,
  backgroundColor: "#171f32",
};
const pStyle = {
  color: "white",
  textAlign: "center"
};

const Footer = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Footer;
