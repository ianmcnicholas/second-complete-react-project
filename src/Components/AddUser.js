import styles from "../Styles/AddUser.module.css";
import Button from "./Button";
import Card from "./Card";

function AddUser() {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={styles.input} onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="text" />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
