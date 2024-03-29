import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import {
  closeIcon,
  phoneIcon,
  contactsEmailIcon,
  instagramIcon,
  whatsappIcon,
  facebookIcon,
} from "../assets/images";

const Contacts = () => {
  const { contextSafe } = useGSAP();

  const closeSidebarContacts = contextSafe(() => {
    gsap.to(".contacts--sidebar", {
      x: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(".contacts--black-cover", {
      opacity: 0,
      zIndex: -1,
      duration: 0.5,
      ease: "power2",
    });
  });

  return (
    <div className="contacts--black-cover">
      <div className="contacts--sidebar">
        <img
          src={closeIcon}
          className="contacts--close-icon"
          alt="close"
          onClick={closeSidebarContacts}
        />
        <h1>Contattami</h1>
        <p>
          Sono qui per soddisfare ogni tua richiesta e per far fronte a
          qualsiasi tua esigenza.
        </p>
        <div className="contacts--email-phone-container">
          <div className="contacts--icons-container">
            <img src={phoneIcon} alt="phone" />
            <a href="tel:+39 335 5722349">+39 335 572 2349</a>
          </div>
          <div className="contacts--icons-container">
            <img src={contactsEmailIcon} alt="email" />
            <a href="mailto:info@visualmerchandisingjourney.it">
              Inviami una mail
            </a>
          </div>
        </div>

        <div className="contacts--social">
          <h2>Canali Social</h2>
          <p>
            Dai un’occhiata ai miei canali social potresti trovare lì la
            risposta alle tue domande.
          </p>
        </div>

        <div className="contacts--email-phone-container">
          <div className="contacts--icons-container">
            <img src={instagramIcon} alt="instagram" />
            <a
              href="https://www.instagram.com/visualmerchandisingjourney?igsh=MXZidmFiZWh5a2l1MQ=="
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div className="contacts--icons-container">
            <img src={whatsappIcon} alt="whatsApp" />
            <a href="https://wa.me/3355722349" target="_blank">
              WhatsApp
            </a>
          </div>
          <div className="contacts--icons-container">
            <img src={facebookIcon} alt="facebook" />
            <a
              href="https://www.facebook.com/VisualMerchandisingJourney"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="contacts--faq">
          <h2>Serve aiuto?</h2>
          <Link to="/privacyPolicy" className="">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
