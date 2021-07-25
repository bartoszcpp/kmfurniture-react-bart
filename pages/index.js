import Head from "next/head";
import HomePage from "./HomePage";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        backgroundImage {
          sourceUrl
        }
        logo {
          sourceUrl
        }
      }
    }
  }
`;

export default function Home() {
  let cms_data = {
    homeText1: "",
    homeText2: "",
    logo: "",
  };
  let div_style = {
    backgroundImage: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
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

  if (data) {
    div_style = {
      backgroundImage: `url(${data.post.home_page_acf.backgroundImage.sourceUrl})`,
    };
    cms_data = {
      homeText1: data.post.home_page_acf.homeText1,
      homeText2: data.post.home_page_acf.homeText2,
      logo: data.post.home_page_acf.logo.sourceUrl,
    };
  }

  return (
    <>
      <div className="page-container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <HomePage background_image={div_style} logo={cms_data.logo} />
        </main>
      </div>
      <footer>
        <Footer logo={cms_data.logo} />
      </footer>
    </>
  );
}
