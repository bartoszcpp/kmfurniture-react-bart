import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Flickity from "react-flickity-component";
import ContactForm from "./ContactForm";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    product(idType: SLUG, id: $data) {
      name
      slug
      image {
        slug
        sourceUrl
      }
      description
      ... on SimpleProduct {
        price
      }
      galleryImages {
        nodes {
          sourceUrl
          slug
        }
      }
      attributes {
        nodes {
          name
          options
        }
      }
    }
  }
`;

const IdComponents = (props) => {
  let is_mobile;
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    is_mobile = width <= 768;
  }

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.id,
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

  const product = data.product;
  const gallery_images = data.product.galleryImages;
  console.log(data, "product");

  const flickity_options = {
    cellAlign: "left",
    contain: true,
    lazyLoad: 1,
  };

  const gallery = gallery_images.nodes.map((image) => (
    <div className="carousel-cell">
      <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
    </div>
  ));

  let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);

  return (
    <div className="container">
      <div className="ProductOverview">
        <div className="row products">
          <div className="col-md-7">
            <Flickity
              className={"products-carousel"}
              options={flickity_options}
            >
              <div className="carousel-cell">
                <img
                  className="img-fluid"
                  src={product.image.sourceUrl}
                  alt=""
                />
              </div>
              {gallery}
            </Flickity>
            {!is_mobile && <ContactForm name={product.name} is_pdp={true} />}
          </div>
          <div className="col-md-5 ProductOverview__info">
            <div className="ProductOverview__name">
              <h3>{product.name}</h3>
              <h4>{floatValue} zł</h4>
            </div>
            <div
              className="ProductOverview__description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            {is_mobile && <ContactForm name={product.name} is_pdp={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdComponents;
