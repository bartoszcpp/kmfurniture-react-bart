import Head from "next/head";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>KMfurniture.pl</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <HomePage />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
