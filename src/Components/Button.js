import styles from "../Styles/Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}  
      {/* provides the content on the button itself e.g. Add User */}
    </button>
  );
}

export default Button;
