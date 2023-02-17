import React from 'react'
import footerbg from "../../../Assets/Home/shape-bg.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={footerbg} alt="nimage" />
      </div>
    </div>
  );
}

export default Footer