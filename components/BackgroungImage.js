import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        backgroundImage {
          sourceUrl
        }
      }
    }
  }
`;

const BackgroundImage = () => {
  let div_style = {
    backgroundImage: "",
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
    div_style = {
      backgroundImage: `url(${data.post.home_page_acf.backgroundImage.sourceUrl})`,
    };
  }

  return (
    <div className="Hero" style={div_style}>
      <div className="Hero__overlay"></div>
      <div className="Hero__content">
        {/*<h1>{cms_data.homeText1}</h1>
        <h2>{cms_data.homeText2}</h2>*/}
      </div>
    </div>
  );
};

export default BackgroundImage;
