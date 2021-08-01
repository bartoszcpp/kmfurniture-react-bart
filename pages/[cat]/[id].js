import { useRouter } from "next/router";
import IdComponents from "../../components/IdComponents";
import Header from "../../components/Header";
import BackgroundImage from "../../components/BackgroungImage";
import Footer from "../../components/Footer";

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="page-container">
        <main>
          <Header />
          <BackgroundImage id="home_page" />
          <IdComponents id={id} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default id;
