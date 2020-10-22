import "./allCharacters.css";
import { createElement } from "../utils/elements";

function allCharacters() {
  const characterS = createElement("section", {
    className: "characters-list",
  });
  return characterS;
}

export default allCharacters;
