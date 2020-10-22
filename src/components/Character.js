import "./character.css";
import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const title = createElement("h3", {
    innerText: name,
  });

  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });

  const characterCard = createElement("article", {
    children: [avatar, title],
  });

  return characterCard;
}

export default Character;
