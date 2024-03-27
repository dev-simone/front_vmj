import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { checkIcon, manichino, arrow } from "../assets/images";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CosaOffro = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#container-anim",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("#container-anim", {
          x: 0,
          duration: 1.5,
          ease: "elastic.out(0.3)",
        });

        gsap.to("#manichino-cosa-offro", {
          x: 0,
          duration: 1.5,
          ease: "elastic.out(0.3)",
        });
      },
    });
  });

  return (
    <div className="cosa-offro">
      <div id="container-anim">
        <h2 className="text-orange ff-lufga">
          Ser<span className="underline">vizi</span>
        </h2>
        <div className="cornice">
          <ul className="text-black">
            <li>
              <img src={checkIcon} alt="check" />
              <p>Consulenza e allestimento vetrine</p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>Consulenza e allestimento del punto vendita</p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>Organizzazione layout negozio</p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>Organizzazione layout vetrine</p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>Formazione</p>
            </li>
          </ul>
        </div>
        <div className="services-link">
          <img src={arrow} alt="arrow" />
          <Link to="/services">Vai alla pagina dei servizi</Link>
        </div>
      </div>
      <img src={manichino} id="manichino-cosa-offro" alt="manichino" />
    </div>
  );
};
export default CosaOffro;
