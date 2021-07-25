import React from "react";

const BackgroundImage = (props) => {
  const { background_image } = props;

  return (
    <div className="Hero" style={background_image}>
      <div className="Hero__overlay"></div>
      <div className="Hero__content">
        {/*<h1>{cms_data.homeText1}</h1>
        <h2>{cms_data.homeText2}</h2>*/}
      </div>
    </div>
  );
};

export default BackgroundImage;
