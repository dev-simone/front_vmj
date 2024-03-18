import {
  experiencePath,
  manichinoExp,
  experiencePathMobile,
} from "../assets/images";

const Esperienze = () => {
  return (
    <div className="experience-container">
      <h1 className="ff-lufga text-orange">
        Esperi<span className="underline">enze</span>
      </h1>
      <img src={experiencePath} className="experience-path" alt="img" />
      <img
        src={experiencePathMobile}
        className="experience-path-mobile"
        alt="img"
      />
      <div className="text-container flex" id="path-1">
        <div>
          <h2 className="ff-lufga text-black text-end">VMJ</h2>
          <p>2023 - Attuale</p>
        </div>
        <div>
          <h2 className="ff-lufga text-black">CEO & Founder</h2>
          <p className="experience-p">
            Studio di consulenza vetrinistica e Visual Merchandising per ben
            oltre 16 anni
          </p>
        </div>
      </div>

      <div className="text-container flex" id="path-2">
        <div>
          <h2 className="ff-lufga text-black text-end">VF Italia</h2>
          <p>2011-2022</p>
        </div>
        <div>
          <h2 className="ff-lufga text-black">Visual Merchandiser</h2>
          <p className="experience-p">
            Studio di consulenza vetrinistica e Visual Merchandising per ben
            oltre 16 anni
          </p>
        </div>
      </div>

      <div className="text-container flex" id="path-3">
        <div>
          <h2 className="ff-lufga text-black text-end">Timberland Italy</h2>
          <p>2008-2011</p>
        </div>
        <div>
          <h2 className="ff-lufga text-black">Visual Merchandiser</h2>
          <p className="experience-p">
            Studio di consulenza vetrinistica e Visual Merchandising per ben
            oltre 16 anni
          </p>
        </div>
      </div>

      <div className="text-container flex" id="path-4">
        <div>
          <h2 className="ff-lufga text-black fs-400 text-end">
            Progettovetrina
          </h2>
          <p>1993-2009</p>
        </div>
        <div>
          <h2 className="ff-lufga text-black fs-400">Titolare</h2>
          <p className="experience-p">
            Studio di consulenza vetrinistica e Visual Merchandising per ben
            oltre 16 anni
          </p>
        </div>
      </div>
      <img src={manichinoExp} className="manichino-experience" alt="img" />
    </div>
  );
};
export default Esperienze;
