import React from "react";
import "./certificate.css";

const certificates = [
  {
    id: 1,
    issuerIcon: "/HackerRank_Icon.png",
    title: "HackerRank - SQL Advanced",
    viewLink: "https://www.hackerrank.com/certificates/606e9b543e2b",
  },
  {
    id: 2,
    issuerIcon: "/meta.png",
    title: "Meta - Javascript programing",
    viewLink: "https://www.coursera.org/account/accomplishments/verify/2ETAACLMWQE5?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 3,
    issuerIcon: "/meta.png",
    title: "Meta - React Advanced",
    viewLink: "https://www.coursera.org/account/accomplishments/verify/LRIIAVHLKWNJ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 4,
    issuerIcon: "/meta.png",
    title: "Meta - Django Web Framework",
    viewLink: "https://www.coursera.org/account/accomplishments/verify/QULW0WX3RSN1?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 5,
    issuerIcon: "/meta.png",
    title: "Meta - API",
    viewLink: "https://www.coursera.org/account/accomplishments/verify/E8OEWFP5US44?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 6,
    issuerIcon: "/meta.png",
    title: "Meta - The full stack development",
    viewLink: "https://www.coursera.org/account/accomplishments/verify/CTUUFLHNMOH5?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 7,
    issuerIcon: "/Udemy.png",
    title: "Udemy - Python",
    viewLink: "#",
  },
  {
    id: 8,
    issuerIcon: "/Dataiku.png",
    title: "Dataiku Core Designer",
    viewLink: "https://verify.skilljar.com/c/efcstbxfnivg",
  },
];

const Certificate = () => {
  return (
    <section className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      {certificates.map(({ id, issuerIcon, title, viewLink }) => (
        <div key={id} className="certificate-card">
          <img src={issuerIcon} alt="Issuer Icon" className="issuer-icon" />
          <div className="certificate-title-box">{title}</div>
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View
          </a>
        </div>
      ))}
    </section>
  );
};
export default Certificate;