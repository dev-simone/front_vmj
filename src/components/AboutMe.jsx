import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import {
  luci,
  sfondoLegno,
  firstSlideRight,
  firstSlideLeft,
  secondSlideRight,
  SecondSlideLeft,
  thirdSlideRight,
  thirdSlideLeft,
} from "../assets/images";

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef(null);

  const object = [
    {
      title: "La mia storia",
      text: "Ho avuto l’opportunità di iniziare ad avvicinarmi a questa professione dopo il diploma, con un tutor d’eccezione, mio padre, ed ho potuto vedere come si è evoluto questo mestiere nel corso degli anni.",
      imgLeft: firstSlideLeft,
      imgRight: firstSlideRight,
    },
    {
      title: "Il mio percorso",
      text: "Dal 1995 mi occupo di allestimento vetrine e visual merchandising per i settori non food. Nella mia esperienza trentennale ho avuto modo di lavorare per importanti aziende, nazionali ed internazionali, e realizzare allestimenti per negozi in franchising e multibrand in diversi settori merceologici",
      imgLeft: SecondSlideLeft,
      imgRight: secondSlideRight,
    },
    {
      title: "Cosa Offro",
      text: "Metto disposizione di commercianti, imprenditori, agenzie retail e istituti di formazione le competenze acquisite nel mio percorso professionale per fornire supporto ecollaborazione,  sia dal punto di vista formativo che operativo",
      imgLeft: thirdSlideLeft,
      imgRight: thirdSlideRight,
    },
  ];

  useGSAP(() => {
    const tl0 = gsap
      .timeline({ paused: true })
      .to(
        ["#imgD1", "#imgD2", "#imgS1", "#imgS2"],
        {
          opacity: 0,
          zIndex: -1,
          duration: 0.5,
        },
        0
      )
      .to(["#imgD0", "#imgS0"], { opacity: 1, zIndex: 1, duration: 1 }, 0);

    const tl1 = gsap
      .timeline({ paused: true })
      .to(
        ["#imgD0", "#imgD2", "#imgS0", "#imgS2"],
        {
          opacity: 0,
          zIndex: -1,
        },
        0
      )
      .to(["#imgD1", "#imgS1"], { opacity: 1, zIndex: 1, duration: 1 }, 0);

    const tl2 = gsap
      .timeline({ paused: true })
      .to(
        ["#imgD0", "#imgD1", "#imgS0", "#imgS1"],
        {
          paused: true,
          opacity: 0,
          zIndex: -1,
          duration: 0.5,
        },
        0
      )
      .to(["#imgD2", "#imgS2"], { opacity: 1, zIndex: 1, duration: 1 }, 0);

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        let newIndex;

        const limitX = 0.33;
        const limitK = 0.66;

        function handleTransition(newIndex) {
          gsap.set(["#imgS0", "#imgD0"], { opacity: 0 });
          tl0.pause(0);
          tl1.pause(0);
          tl2.pause(0);

          if (newIndex === 0) {
            tl0.play();
          } else if (newIndex === 1) {
            tl1.play();
          } else if (newIndex === 2) {
            tl2.play();
          }
        }

        if (progress < limitX) {
          newIndex = 0;
          setCurrentIndex((prevState) => {
            if (prevState !== newIndex) {
              handleTransition(newIndex);
              return newIndex;
            }
            return prevState;
          });
        } else if (progress >= limitX && progress < limitK) {
          newIndex = 1;
          setCurrentIndex((prevState) => {
            if (prevState !== newIndex) {
              handleTransition(newIndex);
              return newIndex;
            }
            return prevState;
          });
        } else if (progress >= limitK && currentIndex !== 2) {
          newIndex = 2;
          setCurrentIndex((prevState) => {
            if (prevState !== newIndex) {
              handleTransition(newIndex);
              return newIndex;
            }
            return prevState;
          });
        }
      },
    });
  });
  return (
    <>
      <div className="about-me grid--about" ref={container}>
        <div className="left">
          <img src={object[currentIndex].imgLeft} id="imgS0" alt="img" />
          <img src={object[currentIndex].imgLeft} id="imgS1" alt="img" />
          <img src={object[currentIndex].imgLeft} id="imgS2" alt="img" />
        </div>
        <div className="center">
          <img src={sfondoLegno} className="sfondo-legno" alt="img" />
          <img src={luci} className="luci" alt="img" />
          <div>
            <h2 className="fs-700">{object[currentIndex].title}</h2>
            <p>{object[currentIndex].text}</p>
          </div>
        </div>
        <div className="right">
          <img src={object[currentIndex].imgRight} id="imgD0" alt="img" />
          <img
            src={object[currentIndex].imgRight}
            id="imgD1"
            className={`${currentIndex === 1 ? "img-center" : ""}`}
            alt="img"
          />
          <img src={object[currentIndex].imgRight} id="imgD2" alt="img" />
        </div>
      </div>
    </>
  );
};
export default AboutMe;
