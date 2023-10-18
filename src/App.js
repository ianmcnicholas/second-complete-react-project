import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import { Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onCreateNewUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onSubmitForm={onCreateNewUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
