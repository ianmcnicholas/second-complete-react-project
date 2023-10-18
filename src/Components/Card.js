import classes from "../Styles/Card.module.css";

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

// the value of the "children" prop will be the content between
// the opening and closing tag of your custom Component,
// wherever it is useDebugValue.

export default Card;
