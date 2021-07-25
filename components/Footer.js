import Link from "next/link";

const Footer = (props) => {
  const { logo } = props;

  return (
    <footer>
      <img className="img-fluid logoPng" src={logo} alt="" /> <br />
      <div className="footerMenu">
        <Link href="/">STRONA GŁÓWNA</Link>
        <Link href="/contact">KONTAKT</Link>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
