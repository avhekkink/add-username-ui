import { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorCause, setErrorCause] = useState("");

  const addUserHandler = (userInput) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.push({ ...userInput, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const errorCauseHandler = (cause) => {
    setErrorCause(cause);
  };

  const errorMessage = (errorCause) => {
    if (errorCause === "invalidAge") {
      return "Please enter a valid age (>0).";
    } else if (errorCause === "emptyValue") {
      return "Please enter a valid name and age (non-empty values).";
    }
  };

  return (
    <div>
      <ErrorModal showModal={showModal} onCloseModal={closeModalHandler}>
        {errorMessage(errorCause)}
      </ErrorModal>
      <UserForm
        onAddUser={addUserHandler}
        onErrorCause={errorCauseHandler}
        onOpenModal={openModalHandler}
      />
      <UserList userData={users} />
    </div>
  );
}

export default App;
