import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-links">
          <Link to="#">Social Links</Link>
          <Link to="#">About</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Support</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
