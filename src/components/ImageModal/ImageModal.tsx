import Modal from "react-modal";
import { CiHeart, CiUser } from "react-icons/ci";
import css from "./ImageModal.module.css";
import { ModalState } from "../../App";

Modal.setAppElement("#root");

interface ImageModalProps {
  onModalClose: () => void;
  modalState: ModalState;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalState,
  onModalClose,
}) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.modalOverlay}
      isOpen={modalState.modalIsOpen}
      onRequestClose={onModalClose}
    >
      <img src={modalState.srcUrl} alt={modalState.altDescription} />
      <ul className={css.list}>
        <li className={css.item}>
          <CiUser size="20" />
          {modalState.authorName}
        </li>
        <li className={css.item}>
          <CiHeart size="20" />
          {modalState.likes}
        </li>
      </ul>
      <p className={css.text}>{modalState.largeDescription}</p>
    </Modal>
  );
};

export default ImageModal;
