import "./modal.css";
const Modal = ({ modal, onPositive, onNegative }) => {
  return (
    <div className="modal-container">
      <div className="modal-content-container">
        <a className="modal-title">{modal?.title}</a>
        <a className="modal-description">{modal?.description}</a>
        <div className="modal-positive-btn" onClick={onPositive}>
          {modal?.positive}
        </div>
        <div className="modal-negative-btn" onClick={onNegative}>
          {modal.negative}
        </div>
      </div>
    </div>
  );
};

export default Modal;
