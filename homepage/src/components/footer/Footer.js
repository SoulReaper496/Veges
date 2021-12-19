import React from "react";
import "./footer.css";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="col">
        <h6>About us</h6>
      </div>
      <div className="col">
        <h6>Connect With us</h6>
        <p>
          <FacebookOutlined style={{ color: "blue", fontSize: "20px" }} />
        </p>
        <p>
          <TwitterOutlined style={{ color: "#1DA1F2", fontSize: "20px" }} />
        </p>
        <p>
          <InstagramOutlined style={{ color: "#8a3ab9", fontSize: "20px" }} />
        </p>
      </div>
      <div className="col">
        <h6>Make monet with us</h6>
        <p>become a partner</p>
        <p>sell on vegs</p>
      </div>
      <div className="col">
        <h6>Let us help you</h6>
        <p>Your account</p>
        <p>App development</p>
        <p>Help</p>
      </div>
    </div>
  );
};

export default Footer;
