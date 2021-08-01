import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        logo {
          sourceUrl
        }
      }
    }
  }
`;

const Footer = () => {
  let cms_data = {
    logo: "",
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
    cms_data = {
      logo: data.post.home_page_acf.logo.sourceUrl,
    };
  }

  return (
    <footer>
      <img className="img-fluid logoPng" src={cms_data.logo} alt="" /> <br />
      <div className="footerMenu">
        <Link href="/">STRONA GŁÓWNA</Link>
        <Link href="/contact">KONTAKT</Link>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
