import Modal from "react-modal";
import './styles.scss'

Modal.setAppElement("#root");

export const DetailMovie = ({isOpen, toggleModal, poster, overview, title}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    className="modal"
    overlayClassName="overlay"
  >
    <div className="modal__actions">
      <div onClick={toggleModal} className="modal__actions--closeModal"></div>
    </div>
    <div className="modal__detailsMovie">
      <img src={poster} alt="" className="modal__detailsMovie--poster" />
      <div className="modal__detailsMovie--overview">
        <h1>{title}</h1>
        <div className="addFavorites">
          <div className="addFavorites__plus"></div>
          <div className="addFavorites__text">Agregar a favoritos</div>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  </Modal>
);