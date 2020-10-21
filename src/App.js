import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { getCharacterById } from "./utils/apis";
import Character from "./components/Character";

function waitFor(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  async function getCharacters() {
    // await waitFor(100);
    const character1 = await getCharacterById(1);
    const character2 = await getCharacterById(2);

    main.append(
      Character({
        name: character1.name,
        imgSrc: character1.image,
      }),
      Character({
        name: character2.name,
        imgSrc: character2.image,
      })
    );
  }

  getCharacters();

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
