import { useNavigate } from "react-router-dom";
import { trashIcon } from "../assets/images";

const Modal = ({ setToggleModal, handleDeleteButton }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setToggleModal(false);
    navigate("/personal-area");
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

        <p>
          Sei sicuro di voler eliminare questo articolo?
          <br />
          Loperazione è <strong>irreversibile!</strong>
        </p>

        <div className="modal--btn-container">
          <button className="modal--annul-btn" onClick={handleClick}>
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2252 0.525184C9.77738 0.0144869 9.00038 -0.0365132 8.48968 0.411272C7.97898 0.859057 7.92798 1.63606 8.37577 2.14676L14.6572 9.31065H1.22981C0.550606 9.31065 0 9.86126 0 10.5405C0 11.2197 0.550606 11.7703 1.22981 11.7703H14.6572L8.37577 18.9343C7.92798 19.445 7.97898 20.222 8.48968 20.6698C9.00038 21.1175 9.77738 21.0665 10.2252 20.5558L18.2958 11.3513C18.3096 11.3356 18.3228 11.3197 18.3356 11.3035C18.5017 11.0939 18.6009 10.8287 18.6009 10.5405C18.6009 10.2261 18.483 9.93923 18.2889 9.7218L10.2252 0.525184Z"
                fill="#ffff"
              />
            </svg>

            <p>Annulla</p>
          </button>
          <button className="modal--delete-btn" onClick={handleDeleteButton}>
            <img src={trashIcon} alt="trash-icon" />
            <p>Elimina</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
