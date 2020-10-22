import "./search.css";
import { createElement } from "../utils/elements";

function Search({ onchange }) {
  const input = createElement("input", {
    placeholder: "search here",
  });

  const button = createElement("button", {
    innerText: "🔍",
  });

  const form = createElement("form", {
    className: "search",
    children: [input, button],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });
  return form;
}

export default Search;
