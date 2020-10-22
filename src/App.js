import "./app.css";
import Header from "./components/Header";
import Character from "./components/Character";
import allCharacters from "./components/allCharacters";
import Button from "./components/Button";
import Search from "./components/Search";
import { createElement } from "./utils/elements";
import { getCharacterS } from "./utils/apis";

function App() {
  let lastName = null;
  let nextPage = null;

  const header = Header();

  const characterList = allCharacters();
  const loadButton = Button({
    innerText: "More Characters",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });
  const main = createElement("main", {
    children: [characterList, loadButton],
  });

  async function loadCharacters(name, page) {
    const characterS = await getCharacterS(name, page);
    const characterElements = characterS.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterList.append(...characterElements);

    nextPage = characterS.info.next?.match(/\d+/)[0];
    loadButton.disabled = !characterS.info.next;
    lastName = name;
  }

  const search = Search({
    onchange: (value) => {
      characterList.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();

  header.append(search);

  const container = createElement("div", {
    children: [header, main],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      loadButton.click();
    }
  });

  return container;
}

export default App;
