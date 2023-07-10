import "./modal.css";
import spinner from "../../../src/assets/loading-spinner.svg";
import error from "../../../src/assets/error.svg";
import success from "../../../src/assets/sucess.svg";
const Modal = ({ modal, onPositive, onNegative }) => {
  const content = () => {
    if (modal?.isLoadingModal) {
      return (
        <>
          <img className="modal-loading-spinner" src={spinner} />
          <a className="modal-title">{modal?.title}</a>
        </>
      );
    } else if (modal?.status) {
      return (
        <>
          <img
            className="modal-alert"
            src={
              modal?.status.includes("deleted") ||
              modal?.status.includes("added") ||
              modal?.status.includes("updated")
                ? success
                : error
            }
          />
          <a className="modal-title">{modal?.message}</a>
          <button className="modal-negative-btn" onClick={onNegative}>
            {modal.negative}
          </button>
        </>
      );
    } else {
      return (
        <>
          <a className="modal-title">{modal?.title}</a>
          <a className="modal-description">{modal?.description}</a>
          <button className="modal-positive-btn" onClick={onPositive}>
            {modal?.positive}
          </button>
          <button className="modal-negative-btn" onClick={onNegative}>
            {modal?.negative}
          </button>
        </>
      );
    }
  };

  return (
    <div className="modal-container" onClick={onNegative}>
      <div className="modal-content-container">{content()}</div>
    </div>
  );
};

export default Modal;
