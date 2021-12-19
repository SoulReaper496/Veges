import React from "react";
import Mainlogo from "./Icon.png";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbarcompent from "./navbar-toogle/Navbarcompent";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="left">
        <img src={Mainlogo} alt="icon" id="image" />
      </div>
      <div className="center">
        <div className="search-icon-container">
          <SearchOutlined className="search-icon" />
        </div>

        <input type="search" />
      </div>
      <div className="right">
        <div className="items">
          <div className="orders">
            <Button variant="info">Orders</Button>{" "}
          </div>
          <div className="Cart">
            <Button variant="info">
              <ShoppingCartOutlined className="Cart-logo" />
            </Button>{" "}
          </div>
          <div className="Login">
            {" "}
            <Button variant="primary">Login</Button>{" "}
          </div>
          <div className="Signup">
            <Button variant="primary">Signup</Button>{" "}
          </div>
        </div>
      </div>
      <div className="last">
        <div className="navbar">
          <Navbarcompent />
        </div>
      </div>
    </div>
  );
};

export default Header;
