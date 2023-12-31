import "./footer.css";
import { footerData, footerLinks } from "../../constants";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const footerLists = footerData.map((list) => (
    <div key={list.title} className="footer__lists">
      <h4 className="footer__titles">{list.title}</h4>
      {list.values.map((item) => (
        <p key={item.value} className="footer__values">
          {item.value}
        </p>
      ))}
    </div>
  ));

  const socialLinks = footerLinks.map((item) => (
    <img src={item.img} alt="Social Links" key={item.id} />
  ));

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__outro">
          <img src={logo} alt="" />
          <p>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="footer__copy">&copy; 2023 Waygo. All rights reserved</p>
        </div>
        {footerLists}
      </div>
      <div className="footer__links">{socialLinks}</div>
    </footer>
  );
};

export default Footer;
