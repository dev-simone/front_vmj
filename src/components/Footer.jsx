import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import useAuth from "../hooks/useAuth";
import {
  logo,
  homeIcon,
  servicesIcon,
  blogIcon,
  contactsIcon,
  contactsEmailIcon,
  phoneIcon,
  instagramIcon,
  whatsappIcon,
  facebookIcon,
} from "../assets/images";
const Footer = () => {
  const { contextSafe } = useGSAP();
  const { selectedPage, setSelectedPage } = useAuth();

  const handleNavLinkClick = (page) => {
    setSelectedPage(page);
    sessionStorage.setItem("page", page);
  };

  const openSidebarContacts = contextSafe(() => {
    gsap.to(".contacts--sidebar", {
      x: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(".contacts--black-cover", {
      opacity: 1,
      zIndex: 9999,
      duration: 0.5,
      ease: "power2",
    });
  });

  return (
    <footer>
      <div>
        <div className="footer--logo-container">
          <img src={logo} alt="logo" />
          <div className="ff-lufga text-black">
            <p>Visual Merchandising Journey</p>
          </div>
        </div>
        <div className="info-container">
          <p>P.IVA: 06151540652</p>
          <div className="info--p-iva-terms-container">
            <Link to="/privacyPolicy" className="">
              Privacy Policy
            </Link>
          </div>
          <p>
            Copyright© 2024 -{" "}
            <a href="https://www.alias-development.com" target="_blank">
              Alias Development
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="footer--second-block">
        <div>
          <h2>Navigazione</h2>
          <Link
            to="/"
            className="footer--nav-link"
            onClick={() => handleNavLinkClick("/")}
          >
            <img src={homeIcon} alt="home" />
            <p>Home</p>
          </Link>
          <Link
            to="/services"
            className="footer--nav-link"
            onClick={() => handleNavLinkClick("services")}
          >
            <img src={servicesIcon} alt="Servizi" />
            <p>Servizi</p>
          </Link>
          <Link
            to="/blog"
            className="footer--nav-link"
            onClick={() => handleNavLinkClick("blog")}
          >
            <img src={blogIcon} alt="Blog" />
            <p>Blog</p>
          </Link>
          <button onClick={openSidebarContacts} className="footer--nav-link">
            <img src={contactsIcon} alt="contatti" />
            <p>Contatti</p>
          </button>
        </div>

        <div>
          <h2>Contatti</h2>
          <div className="footer--contact-info">
            <img src={phoneIcon} alt="phone" />
            <p>+39 335 572 2349</p>
          </div>
          <div className="footer--contact-info">
            <img src={contactsEmailIcon} alt="email" />
            <a href="mailto:info@visualmerchandisingjourney.it">
              info@visualmerchandisingjourney.it
            </a>
          </div>
          <div className="footer--socials-container">
            <a
              href="https://www.facebook.com/VisualMerchandisingJourney"
              target="_blank"
            >
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/visualmerchandisingjourney?igsh=MXZidmFiZWh5a2l1MQ=="
              target="_blank"
            >
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a href="https://wa.me/3355722349" target="_blank">
              <img src={whatsappIcon} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
