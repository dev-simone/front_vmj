import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useAuth from "../hooks/useAuth";
import {
  serviziCartellino,
  cartellinoMobile,
  allestimentoVetrine1,
  allestimentoVetrine2,
  allestimentoVetrine3,
  allestimentoPuntoVendita1,
  allestimentoPuntoVendita2,
  allestimentoPuntoVendita3,
  layout1,
  layout2,
  layout3,
  formazione,
  formazionePV1,
  formazionePV2,
  formazionePV3,
} from "../assets/images";

const ServicesPage = () => {
  const { setSelectedPage } = useAuth();
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  const imgs = [img1, img2, img3];
  const dots = [dot1, dot2, dot3];
  const { contextSafe } = useGSAP();

  useEffect(() => {
    setSelectedPage("services");
    sessionStorage.setItem("page", "services");
    window.scrollTo(0, 0);
  }, []);

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

  const serviceObj = [
    {
      title: "Consulenza e allestimento ve",
      titleSpan: "trine",
      text: "L'allestimento della vetrina è determinante per influenzare la scelta dei clienti di entrare in negozio. Condivido la mia esperienza trentennale per supportare i punti vendita nella creazione di vetrine accattivanti e commercialmente efficaci, per migliorare la visibilità dei prodotti e l’interazione con il pubblico di riferimento.",
      img1: allestimentoVetrine1,
      img2: allestimentoVetrine2,
      img3: allestimentoVetrine3,
    },

    {
      title: "Consulenza e allestimento del punto ve",
      titleSpan: "ndita",
      content: {
        firstP:
          "In un mercato complesso e iper competitivo, i negozi devono riuscire a creare una narrazione coinvolgente per comunicare in modo efficace con il cliente.",
        secondP:
          "Il Visual Merchandising svolge un ruolo cruciale per favorire questo processo, mediante un'esposizione accurata e significativa dei prodotti in vendita.",
        thirdP:
          "Metto a disposizione la mia esperienza per aiutare proprietari di negozi e in store staff ad ottimizzare l'organizzazione dell’allestimento in negozio, potenziandone la comunicazione e migliorando il sell-out.",
        bulletTitle: "Modalità di lavoro:",
        bulletList: [
          "Briefing per una condivisione delle esigenze commerciali del punto vendita;",
          "Individuazione delle soluzioni espositive più adeguate – non solo dal punto di vista estetico, ma soprattutto commerciale – al fine di migliorare l’esposizione in negozio;",
          "Identificazione delle attività operative e intervento sul punto vendita, con definizione di budget e tempistiche.",
        ],
      },
      img1: allestimentoPuntoVendita1,
      img2: allestimentoPuntoVendita2,
      img3: allestimentoPuntoVendita3,
    },

    {
      title: "Organizzazione ",
      titleSpan: "layout",
      bulletTitleFirst: "LAYOUT NEGOZIO",
      firstText:
        "Il layout rappresenta l’organizzazione di strutture e prodotto nell'area espositiva, la cui funzione è quella di favorire l'interazione tra cliente e offerta, migliorandone l'attrattività e la comunicazione. Attraverso l'analisi e la riorganizzazione degli spazi, aiuto ad ottimizzare la disposizione degli arredi esistenti o a valutare l’inserimento di nuove strutture espositive per sfruttare in modo produttivo l’area di vendita.",
      bulletTitleSecond: "LAYOUT VETRINA",
      secondText:
        "Il layout della vetrina rappresenta l’organizzazione delle strutture espositive, dei manichini e del prodotto all’interno dello spazio espositivo. Sulla base degli elementi presenti nella vetrina aiuto il commerciante ad individuare i supporti più adatti per migliorare la presentazione dei prodotti.",
      img1: layout1,
      img2: layout2,
      img3: layout3,
    },

    {
      title: "Form",
      titleSpan: "azione",
      text: "L'identità visiva e l'ambiente coinvolgente di un punto vendita richiedono competenze che vanno ben oltre la mera creatività: è cruciale acquisire la conoscenza delle tecniche espositive, in vetrina e in store, per differenziarsi dalla concorrenza e ottenere vantaggio competitivo. Le sessioni formative sono personalizzate e offrono un supporto operativo per commercianti e operatori del settore retail.",
      bulletTitle: "PRINCIPALI ARGOMENTI",
      bulletList: [
        "Acquisizione degli strumenti per razionalizzare gli spazi espositivi;",
        "Conoscenza delle tecniche per valorizzare i prodotti nel punto vendita;",
        "Sviluppo della capacità di utilizzare materiali, luci e colori per una comunicazione multisensoriale.",
      ],
      img1: formazione,
      img2: formazione,
      img3: formazione,
    },

    {
      title: "Formazione: Corso di Visual Merch",
      titleSpan: "andising",
      firstP:
        "Il percorso proposto si configura come un prezioso alleato nel comprendere le tecniche e gli strumenti più diffusi ed attuali di visual merchandising, approfondendo i concetti fondamentali relativi all'allestimento, sia in vetrina che in negozio.",
      secondP:
        "È una proposta formativa completa che, partendo dall’analisi delle principali dinamiche espositive, consente al partecipante di affrontare con consapevolezza le problematiche quotidiane dell’allestimento, adottando soluzioni esteticamente interessanti e commercialmente efficaci. Materiale di supporto, slide e case history completano l’attività formativa.",
      bulletTitle: "A CHI E' RIVOLTO",
      thirdP:
        "Il corso è rivolto a personale di vendita, commercianti, professionisti del settore che vogliono migliorare o aggiornare le proprie competenze.",
      img1: formazione,
      img2: formazione,
      img3: formazione,
    },

    {
      title: "Formazione: Corso di vetrini",
      titleSpan: "stica",
      firstP:
        "La vetrina rappresenta uno potente mezzo pubblicitario il cui ruolo è essenziale non solo per vendere, ma soprattutto per comunicare, attrarre clienti e creare rapporti. Il corso propone una full immersion delle principali tecniche di vetrinistica per gestirne i codici comunicativi secondo una specifica programmazione temporale e istaurando un dialogo continuo con il proprio target.",
      secondP:
        "Cosa si rilascia: Materiale di supporto, slide e case history completano l’attività formativa.",
      bulletTitle: "A CHI E' RIVOLTO",
      thirdP:
        "Il corso è rivolto a personale di vendita, commercianti, professionisti del settore che vogliono migliorare o aggiornare le proprie competenze.",
      img1: formazione,
      img2: formazione,
      img3: formazione,
    },

    {
      title: "Formazione: Punto ven",
      titleSpan: "dita",
      firstP:
        "Partendo da un’analisi delle principali problematiche del punto vendita, si definisce con il committente l’attività di formazione appropriata, considerando l’assortimento, lo spazio di vendita e l’area deposito, gli elementi espositivi, le vetrine ed infrastrutture, il personale da coinvolgere. L’approccio formativo, oltre ad un taglio fortemente operativo, è di natura consulenziale, con l’intento di migliorare la gestione dell’esposizione nel punto vendita e, di conseguenza, il sell-out.",
      img1: formazionePV1,
      img2: formazionePV2,
      img3: formazionePV3,
    },
  ];

  useEffect(() => {
    const ancora = window.location.hash;
    if (ancora) {
      if (service === "allestimentoInterni") {
        setIndex(1);
      } else if (service === "allestimentoVetrine") {
        setIndex(0);
      } else if (service === "formazione") {
        setIndex(3);
      } else if (service === "layout") {
        setIndex(2);
      }
      const elementoAncora = document.querySelector(ancora);
      if (elementoAncora) {
        elementoAncora.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [service, location]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    imgs.forEach((img, index) => {
      tl.to(img.current, { opacity: 1, duration: 0.5 })
        .to(
          dots[index].current,
          { backgroundColor: "#4018B9", duration: 0.5 },
          "-=0.5"
        )
        .to(img.current, { opacity: 0, duration: 0.5, delay: 1.5 })
        .to(
          dots[index].current,
          { backgroundColor: "#636363", duration: 0.5 },
          "-=0.5"
        );

      if (index === imgs.length - 1) {
        tl.to(imgs[0].current, { opacity: 1, duration: 0.5 }, "-=0.5").to(
          dots[0].current,
          { backgroundColor: "#4018B9", duration: 0.5 },
          "-=0.5"
        );
      }
    });
  });

  const handleClick = (direction) => {
    if (direction === "next") {
      setIndex((prevIndex) => (prevIndex + 1) % serviceObj.length);
    } else if (direction === "prev") {
      setIndex(
        (prevIndex) => (prevIndex - 1 + serviceObj.length) % serviceObj.length
      );
    }
  };

  const handleServiceClick = (option) => {
    if (option === "allestimentoVetrine") {
      setIndex(0);
      navigate("#ancora");
    } else if (option === "layout") {
      setIndex(2);
      navigate("#ancora");
    } else if (option === "formazione") {
      setIndex(3);
      navigate("#ancora");
    }
  };

  return (
    <>
      <div className="services-page">
        <h1 className="underline">Servizi</h1>
        <div className="grid--services">
          <img src={serviziCartellino} className="cartellino" alt="img" />
          <img src={cartellinoMobile} className="cartellino-mobile" alt="" />
          <div className="services-card--container">
            <div onClick={() => handleServiceClick("allestimentoVetrine")}>
              <h2>Allestimento</h2>
            </div>
            <div onClick={() => handleServiceClick("layout")}>
              <h2>Layout</h2>
            </div>
            <div onClick={() => handleServiceClick("formazione")}>
              <h2>Formazione</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="services-second-section" id="ancora">
        <div className="flex services-second--grid">
          <div>
            <h1>
              {serviceObj[index].title}
              <span className="underline">{serviceObj[index].titleSpan}</span>
            </h1>
            {index === 1 ? (
              <div className="index-1">
                <p>{serviceObj[index].content.firstP}</p>
                <p>{serviceObj[index].content.secondP}</p>
                <p>{serviceObj[index].content.thirdP}</p>
                <p>{serviceObj[index].content.bulletTitle}</p>
                <ul>
                  {serviceObj[index].content.bulletList.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            ) : index === 2 ? (
              <div className="index-1">
                <p>{serviceObj[index].bulletTitleFirst}</p>
                <p>{serviceObj[index].firstText}</p>
                <p>{serviceObj[index].bulletTitleSecond}</p>
                <p>{serviceObj[index].secondText}</p>
              </div>
            ) : index === 3 ? (
              <div className="index-1">
                <p>{serviceObj[index].text}</p>
                <p>{serviceObj[index].bulletTitle}</p>
                <ul>
                  {serviceObj[index].bulletList.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            ) : index === 4 || index === 5 ? (
              <div className="index-1">
                <p>{serviceObj[index].firstP}</p>
                <p>{serviceObj[index].secondP}</p>
                <p>{serviceObj[index].bulletTitle}</p>
                <p>{serviceObj[index].thirdP}</p>
              </div>
            ) : index === 6 ? (
              <div className="index-1">
                <p>{serviceObj[index].firstP}</p>
              </div>
            ) : (
              <div className="index-1">
                <p>{serviceObj[index].text}</p>
              </div>
            )}
            <p className="arrow-p">
              Usa le frecce per esplorare i diversi servizi
            </p>

            <div className="arrow-wood-container">
              <button
                className="arrow-wood-btn"
                onClick={() => handleClick("prev")}
              >
                <svg
                  className="rotate"
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.900391 1.41992L8.10039 7.41992L0.900391 13.4199"
                    stroke="#454545"
                    strokeWidth="2.4"
                  />
                </svg>
              </button>
              <button
                className="arrow-wood-btn"
                onClick={() => handleClick("next")}
              >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.900391 1.41992L8.10039 7.41992L0.900391 13.4199"
                    stroke="#454545"
                    strokeWidth="2.4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="img-container">
            <div className="img-container--img">
              <img src={serviceObj[index].img1} ref={img1} alt="" />
              <img src={serviceObj[index].img2} ref={img2} alt="" />
              <img src={serviceObj[index].img3} ref={img3} alt="" />
            </div>
            <div className="dots-container">
              <div ref={dot1}></div>
              <div ref={dot2}></div>
              <div ref={dot3}></div>
            </div>
            <div className="cta-container">
              <p>Per informazioni</p>
              <button onClick={openSidebarContacts} className="cta">
                Contattami
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesPage;
