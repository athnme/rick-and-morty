import "./app.css";
import Header from "./components/Header";
import Character from "./components/Character";
import allCharacters from "./components/allCharacters";
import { createElement } from "./utils/elements";
import { getCharacterS } from "./utils/apis";

function App() {
  const header = Header();

  const characterList = allCharacters();
  const main = createElement("main", {
    children: [characterList],
  });

  async function loadCharacters(name) {
    const characterS = await getCharacterS(name);
    const characterElements = characterS.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterList.innerHTML = "";
    characterList.append(...characterElements);
  }

  const searchBar = createElement("input", {
    onchange: (event) => loadCharacters(event.target.value),
  });

  loadCharacters();

  const container = createElement("div", {
    children: [header, searchBar, main],
  });

  return container;
}

export default App;
