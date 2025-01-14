// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";

const ModalBack = ({ setToggleModalBack }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setToggleModalBack(false);
    navigate("/personal-area");
  }

  const handleClickAnnul = (e) => {
    e.preventDefault();
    setToggleModalBack(false);
  };


  return (
    <div className="modal">
      <div className="modal-container">
        <svg
          className="modal--warning-icon"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M16.4998 10.667V16.5003M16.4998 22.3337H16.5144M1.9165 11.4293V21.5713C1.9165 21.928 1.9165 22.1064 1.9568 22.2742C1.99252 22.423 2.05145 22.5653 2.1314 22.6957C2.22159 22.8429 2.3477 22.969 2.59992 23.2212L9.77892 30.4002C10.0311 30.6525 10.1573 30.7786 10.3044 30.8688C10.4349 30.9487 10.5772 31.0076 10.726 31.0434C10.8938 31.0837 11.0721 31.0837 11.4288 31.0837H21.5708C21.9275 31.0837 22.1059 31.0837 22.2737 31.0434C22.4225 31.0076 22.5648 30.9487 22.6953 30.8688C22.8424 30.7786 22.9685 30.6525 23.2208 30.4002L30.3998 23.2212C30.652 22.969 30.7781 22.8429 30.8683 22.6957C30.9482 22.5653 31.0072 22.423 31.0429 22.2742C31.0832 22.1064 31.0832 21.928 31.0832 21.5713V11.4293C31.0832 11.0726 31.0832 10.8943 31.0429 10.7264C31.0072 10.5776 30.9482 10.4354 30.8683 10.3049C30.7781 10.1577 30.652 10.0316 30.3998 9.77941L23.2208 2.60041C22.9685 2.34819 22.8424 2.22208 22.6953 2.13189C22.5648 2.05193 22.4225 1.99301 22.2737 1.95729C22.1059 1.91699 21.9275 1.91699 21.5708 1.91699H11.4288C11.0721 1.91699 10.8938 1.91699 10.726 1.95729C10.5772 1.99301 10.4349 2.05193 10.3044 2.13189C10.1573 2.22208 10.0311 2.34819 9.77892 2.60041L2.59992 9.77941C2.3477 10.0316 2.22159 10.1577 2.1314 10.3049C2.05145 10.4354 1.99252 10.5776 1.9568 10.7264C1.9165 10.8943 1.9165 11.0726 1.9165 11.4293Z"
              stroke="#FF7F2A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <p>Tornando indietro perderai tutte le modifiche</p>
        <div className="modal--btn-container">
          <button className="modal--annul-btn" onClick={handleClickAnnul}>
            <p>Annulla</p>
          </button>
          <button
            onClick={handleClick}
            className="modal-back--btn"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalBack;
