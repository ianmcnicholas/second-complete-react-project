import classes from "../Styles/AddUser.module.css";
import Button from "./Button";
import Card from "./Card";
import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";
import { Fragment } from "react";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        errorMessage: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      // the '+' will force a string into a number if possible
      setError({
        title: "Invalid Age",
        errorMessage: "Please enter an age > 0.",
      });
      return;
    }
    props.onSubmitForm(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const resetModal = () => {
    setError();
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          errorMessage={error.errorMessage}
          onClick={resetModal}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
