import gsap from "gsap";
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
          qualsiasi tua esigenza
        </p>
        <div className="contacts--email-phone-container">
          <div className="contacts--icons-container">
            <img src={phoneIcon} alt="phone" />
            <p>+39 335 572 2349</p>
          </div>
          <div className="contacts--icons-container">
            <img src={contactsEmailIcon} alt="" />
            <a href="">Inviami una mail</a>
          </div>
        </div>

        <div className="contacts--social">
          <h2>Canali Social</h2>
          <p>
            Dai un’occhiata ai miei canali social potresti trovare lì la
            risposta alle tue domande
          </p>
        </div>

        <div className="contacts--email-phone-container">
          <div className="contacts--icons-container">
            <img src={instagramIcon} alt="instagram" />
            <a href="">Instagram</a>
          </div>
          <div className="contacts--icons-container">
            <img src={whatsappIcon} alt="whatsApp" />
            <a href="">WhatsApp</a>
          </div>
          <div className="contacts--icons-container">
            <img src={facebookIcon} alt="facebook" />
            <a href="">Facebook</a>
          </div>
        </div>

        <div className="contacts--faq">
          <h2>Serve aiuto?</h2>
          <a href="">FAQ</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
export default Contacts;