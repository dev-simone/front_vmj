// eslint-disable-next-line react/prop-types
const ModalSaved = ({ setToggleModalSaved }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <svg
          className="modal--checked-icon"
          width="29"
          height="21"
          viewBox="0 0 29 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.1668 2.75L10.1252 18.7917L2.8335 11.5"
            stroke="#51D500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Articolo salvato con successo</p>
        <button
          onClick={() => setToggleModalSaved(false)}
          className="modal-saved--btn"
        >
          OK
        </button>
      </div>
    </div>
  );
};
export default ModalSaved;
