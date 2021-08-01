import ContactForm from "../components/ContactForm";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      contact_acf {
        address1
        address2
        email
        name
        phonenumber
      }
    }
  }
`;

const ContactContainer = () => {
  let cms_data = {
    address1: "",
    address2: "",
    email: "",
    name: "",
    phonenumber: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "contact",
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
      address1: data.post.contact_acf.address1,
      address2: data.post.contact_acf.address2,
      email: data.post.contact_acf.email,
      name: data.post.contact_acf.name,
      phonenumber: data.post.contact_acf.phonenumber,
    };
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 formularz">
            <ContactForm is_pdp={false} />
          </div>
          <div className="col-lg-6 col-md-4 contact_values contact">
            <h3>{cms_data.name}</h3>
            <p className="font-weight-bold">Adres</p>
            <p>{cms_data.address1}</p>
            <p>{cms_data.address2}</p>
            <br />
            <p className="font-weight-bold">E-mail</p>
            <p>{cms_data.email}</p>
            <br />
            <p className="font-weight-bold">Telefon</p>
            <p>{cms_data.phonenumber}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
