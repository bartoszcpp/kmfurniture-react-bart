import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { AppContext } from "./contex/AppContex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { logo } = props;

  const { cart, toggleCart, price, togglePrice, count, toggleCount } =
    useContext(AppContext);

  return (
    <>
      <Navbar className="Header navbar" expand="lg">
        <div className="container justify-content-between">
          <Navbar.Brand className="Header__logo" href="/">
            <img className="img-fluid logoPng" src={logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="Header__collapse" id="basic-navbar-nav">
            <Nav className="mr-right">
              <Nav.Link href="/contact">KONTAKT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
