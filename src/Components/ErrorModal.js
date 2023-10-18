import classes from "../Styles/ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModal;
