import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProductTile from "./ProductTile";
import ImgProductCat from "./ImgProductCat";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }) {
      nodes {
        name
        slug
        ... on SimpleProduct {
          price
        }
        image {
          sourceUrl
        }
        shortDescription
        galleryImages {
          nodes {
            sourceUrl
            slug
          }
        }
      }
    }
  }
`;

const Products = (props) => {
  const { category } = props;

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: category,
    },
  });

  //let count = 1;
  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error) return <p>Something wrong happened!</p>;

  console.log(data, "data");
  //const categories = data.productCategories.nodes;

  const products = data.products.nodes.map((product) => (
    <ProductTile
      image={product.image.sourceUrl}
      name={product.name}
      price={product.price}
      slug={product.slug}
      shortDescription={product.shortDescription}
      galleryImages={product.galleryImages}
    />
  ));

  const all_collections = "all";

  return (
    <>
      <div className="Products container">
        <div className="Products__container">{products}</div>
      </div>
    </>
  );
};

export default Products;
