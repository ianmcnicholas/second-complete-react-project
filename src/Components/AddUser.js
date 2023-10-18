import classes from "../Styles/AddUser.module.css";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

function AddUser(props) {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      // the '+' will force a string into a number if possible
      return;
    }
    props.onSubmitForm(enteredUserName, enteredUserAge);
    setUserName("");
    setUserAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
