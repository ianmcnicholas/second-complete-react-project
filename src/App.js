import React, { useState } from "react";
import AddUser from "./Components/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const onCreateNewUserHandler = (newUser) => {
    console.log(users);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(users);
  };
  return (
    <div>
      <AddUser onSubmitForm={onCreateNewUserHandler} />
    </div>
  );
}

export default App;
