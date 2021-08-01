import ContactContainer from "../components/ContactContainer";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="page-container">
        <main>
          <Header />
          <BackgroundImage id="home_page" />
          <ContactContainer />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
