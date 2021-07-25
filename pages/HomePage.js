import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import ContentBlock from "../components/ContentBlock";

const HomePage = (props) => {
  const { background_image, logo } = props;

  return (
    <>
      <Header logo={logo} />
      <BackgroundImage background_image={background_image} />
      <Products category="home_page" />
      <ContentBlock id="home_page" />
    </>
  );
};

export default HomePage;
