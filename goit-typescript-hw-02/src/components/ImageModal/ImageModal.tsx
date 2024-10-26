import ReactModal from "react-modal";
import "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  if (!selectedImage) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <img
        src={selectedImage.urls.full}
        alt={selectedImage.alt_description || "Image"}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </ReactModal>
  );
};

export default ImageModal;
