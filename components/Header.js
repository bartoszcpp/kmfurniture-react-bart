import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        logo {
          sourceUrl
        }
      }
    }
  }
`;

const Header = () => {
  let cms_data = {
    logo: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
    },
  });

  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  if (data) {
    cms_data = {
      logo: data.post.home_page_acf.logo.sourceUrl,
    };
  }

  return (
    <>
      <Navbar className="Header navbar" expand="lg">
        <div className="container justify-content-between">
          <Navbar.Brand className="Header__logo" href="/">
            <img className="img-fluid logoPng" src={cms_data.logo} alt="" />{" "}
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
