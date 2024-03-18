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
          Cosa <span className="underline">offro</span>
        </h2>
        <div className="cornice">
          <ul className="text-black">
            <li>
              <img src={checkIcon} alt="check" />
              <p>
                <span>Allestimento </span>: Vetrine, Punto vendita e show room
              </p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>
                <span>Layout </span>: Organizzazione degli Arredi e del Prodotto
              </p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>
                <span>Formazione </span>: Vetrinistica e Visual Merchandising
              </p>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <p>
                <span>Consulenza </span>: Vetrinistica e Visual Merchandising
              </p>
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
