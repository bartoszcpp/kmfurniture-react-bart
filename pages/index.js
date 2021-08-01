import Head from "next/head";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>KMfurniture.pl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
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
