import styles from "./Modal.module.css";
import spinner from "../../../src/assets/loading-spinner.svg";
import error from "../../../src/assets/error.svg";
import success from "../../../src/assets/sucess.svg";
import PropTypes from "prop-types";

const Modal = ({ modal, onPositive, onNegative }) => {
  const content = () => {
    if (modal?.isLoadingModal) {
      return (
        <>
          <img className={styles.spinner} src={spinner} />
          <a className={styles.modalTitle}>{modal?.title}</a>
        </>
      );
    } else if (modal?.status) {
      return (
        <>
          <img
            className={styles.modalAlert}
            src={
              modal?.status.includes("deleted") ||
              modal?.status.includes("added") ||
              modal?.status.includes("updated")
                ? success
                : error
            }
          />
          <a className={styles.modalTitle}>{modal?.message}</a>
          <button className={styles.negativeButton} onClick={onNegative}>
            {modal.negative}
          </button>
        </>
      );
    } else {
      return (
        <>
          <a className={styles.modalTitle}>{modal?.title}</a>
          <a className={styles.modalDescription}>{modal?.description}</a>
          <button className={styles.positiveButton} onClick={onPositive}>
            {modal?.positive}
          </button>
          <button className={styles.negativeButton} onClick={onNegative}>
            {modal?.negative}
          </button>
        </>
      );
    }
  };

  return (
    <div className={styles.modalContainer} onClick={onNegative}>
      <div className={styles.contentContainer}>{content()}</div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    isLoadingModal: PropTypes.bool,
    status: PropTypes.string,
    message: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    positive: PropTypes.string,
    negative: PropTypes.string,
    object: PropTypes.object,
  }),
  onPositive: PropTypes.func,
  onNegative: PropTypes.func,
};

export default Modal;
