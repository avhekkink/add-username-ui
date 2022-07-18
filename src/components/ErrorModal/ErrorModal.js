import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import "./ErrorModal.css";

const BackdropOverlay = (props) => {
  return <div className="backdrop-overlay" onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Invalid Input</h2>
        </div>
        <div className="modal-body">
          <p>{props.message}</p>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={props.onClick}>
            Okay
          </button>
        </div>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackdropOverlay onClick={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onCloseModal} message={props.children} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
