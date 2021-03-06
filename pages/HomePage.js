import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import ContentBlock from "../components/ContentBlock";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <Products category="home_page" />
      <div className="border-on-mobile"></div>
      <ContentBlock id="home_page" />
    </>
  );
};

export default HomePage;
