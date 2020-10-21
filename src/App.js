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

  async function loadCharacters() {
    const characterS = await getCharacterS();
    const characterElements = characterS.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterList.append(...characterElements);
  }

  loadCharacters();
  const container = createElement("div", {
    children: [header, main],
  });
  return container;
}

export default App;
