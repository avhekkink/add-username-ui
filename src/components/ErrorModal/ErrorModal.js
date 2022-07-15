import Card from "../UI/Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  if (!props.showModal) {
    return null;
  }

  const clickHandler = () => {
    console.log("Close modal");
    props.onCloseModal();
  };

  return (
    <>
      <div className="overlay" onClick={clickHandler} />
      <Card className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Invalid Input</h2>
          </div>
          <div className="modal-body">
            <p>{props.children}</p>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={clickHandler}>
              Okay
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
