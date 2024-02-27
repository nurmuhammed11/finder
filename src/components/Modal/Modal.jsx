import React from "react";

const Modal = ({ largeImageURL, handleClose }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <>
      <div onClick={onCloseModal} className="Overlay">
        <div className="Modal">
          <div className="close-btn">
            <button onClick={onCloseModal}>X</button>
          </div>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    </>
  );
};

export default Modal;
