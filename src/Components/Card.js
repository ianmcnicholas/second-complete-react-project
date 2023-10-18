import "../Styles/Card.css"

function Card(props) {
  const classes = "card " + props.className; // anything we receive from outside is added
  return <div className={classes}>{props.children}</div>;
}

// the value of the "children" prop will be the content between
// the opening and closing tag of your custom Component,
// wherever it is useDebugValue.

export default Card;
