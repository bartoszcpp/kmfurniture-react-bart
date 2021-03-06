import React from "react";
import Link from "next/link";
import Flickity from "react-flickity-component";

const ProductTile = (props) => {
  const { image, name, price, slug, shortDescription, galleryImages } = props;

  const flickity_options = {
    pageDots: false,
    wrapAround: true,
  };

  const gallery = galleryImages.nodes.map((image) => (
    <div className="carousel-cell">
      <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
    </div>
  ));

  const computed_price = parseInt(price.match(/[+-]?\d+(\.\d+)?/g)[0]);

  return (
    <div className="ProductTile">
      <div className="ProductTile__title--mobile">
        <div className="ProductTile__name">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="ProductTile__image">
        <Flickity className={"products-carousel"} options={flickity_options}>
          <div className="carousel-cell">
            <img
              className="img-fluid ProductTile__img"
              src={image}
              alt={name}
            />
          </div>
          {gallery}
        </Flickity>
      </div>
      <div className="ProductTile__overlay">
        <div className="ProductTile__content">
          <div className="ProductTile__name">
            <h2>{name}</h2>
          </div>
          <div
            className="ProductTile__short-description"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          ></div>
          <div className="ProductTile__price">{computed_price} zł</div>
          <div className="ProductTile__button">
            <Link href="/[cat]/[id]" as={`/all/${slug}`}>
              Zamów
            </Link>
          </div>
        </div>
      </div>
      <div className="ProductTile__content--mobile">
        <div
          className="ProductTile__short-description"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        ></div>
        <div className="ProductTile__price">{computed_price} zł</div>
        <div className="ProductTile__button">
          <Link href="/[cat]/[id]" as={`/all/${slug}`}>
            Zamów
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
