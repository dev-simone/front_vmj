import { useEffect } from "react";
import Servizi from "../components/Servizi";
import CosaOffro from "../components/CosaOffro";
import AboutMe from "../components/AboutMe";
import Esperienze from "../components/Esperienze";
import Quote from "../components/Quote";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Servizi />
      <CosaOffro />
      <Quote />
      <AboutMe />
      <Esperienze />
    </>
  );
};
export default Home;
