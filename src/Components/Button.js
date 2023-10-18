import styles from "../Styles/Button.module.css"

function Button(props) {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
