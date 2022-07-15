import { useState } from "react";
import Card from "../UI/Card";
import "./UserForm.css";

const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUsername: "",
    enteredAge: "",
    id: "",
  });

  const usernameInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredUsername: event.target.value };
    });
  };

  const ageInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!userInput.enteredUsername.trim() || !userInput.enteredAge.trim()) {
      props.onErrorCause("emptyValue");
      props.onOpenModal();
    } else if (!(+userInput.enteredAge > 0)) {
      props.onErrorCause("invalidAge");
      props.onOpenModal();
    } else {
      props.onAddUser(userInput);
      setUserInput((prevState) => {
        return { ...prevState, enteredUsername: "", enteredAge: "" };
      });
    }
  };

  return (
    <Card className="new-user">
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={userInput.enteredUsername}
            onChange={usernameInputChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            type="text"
            value={userInput.enteredAge}
            onChange={ageInputChangeHandler}
          />
        </div>
        <button type="submit" className="button">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default UserForm;
