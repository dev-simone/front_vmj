import { placeholder } from "../assets/images";

const Test = () => {
  return (
    <div className="test-page">
      <div className="test-container">
        <div className="test-card">
          <div className="test-pallino"></div>
          <div className="test-box">
            <img src={placeholder} alt="" className="test-img" />
            <div className="test-icon"></div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-box">
            <div className="test-icon"></div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-box">
            <div className="test-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
