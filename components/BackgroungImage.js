import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      acf_field {
        homeText1
        homeText2
        backgroundImage {
          sourceUrl
        }
      }
    }
  }
`;

const BackgroundImage = (props) => {
  const { id } = props;
  let cms_data = {
    homeText1: "",
    homeText2: "",
  };
  let div_style = {
    backgroundImage: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: id,
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
      backgroundImage: `url(${data.post.acf_field.backgroundImage.sourceUrl})`,
    };
    cms_data = {
      homeText1: data.post.acf_field.homeText1,
      homeText2: data.post.acf_field.homeText2,
    };
  }

  return (
    <div className="Hero" style={div_style}>
      <div className="Hero__overlay"></div>
      <div className="Hero__content">
        <div className="Hero__flag Polish__flag">
          <div className="Hero__flag--red Polish__flag--red"></div>
          <div className="Hero__flag--white Polish__flag--white"></div>
        </div>
        <h1>{cms_data.homeText1}</h1>
        <h2>{cms_data.homeText2}</h2>
      </div>
    </div>
  );
};

export default BackgroundImage;
