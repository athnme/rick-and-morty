import { createElement } from "../utils/elements";
import "./button.css";

function Button(props) {
  const element = createElement("button", {
    className: "btn",
    ...props,
  });
  return element;
}

export default Button;
