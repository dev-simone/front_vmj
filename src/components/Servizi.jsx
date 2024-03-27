import { Link } from "react-router-dom";

const Servizi = () => {
  return (
    <div className="grid grid--home">
      {/* SERVIZI */}
      <Link
        to="/services#ancora"
        state={{ service: "allestimentoVetrine" }}
        className="link-to-service"
      >
        <p>Allestimento Vetrine</p>
      </Link>
      <Link
        to="/services#ancora"
        state={{ service: "allestimentoInterni" }}
        className="link-to-service"
      >
        <p>Allestimento Interni</p>
      </Link>
      <Link
        to="/services#ancora"
        state={{ service: "formazione" }}
        className="link-to-service"
      >
        <p className="formazione">Formazione</p>
      </Link>
      <Link
        to="/services#ancora"
        state={{ service: "layout" }}
        className="link-to-service"
      >
        <p>Organizzazione Layout</p>
      </Link>
    </div>
  );
};
export default Servizi;
