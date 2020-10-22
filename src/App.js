import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { getCharacterById } from "./utils/apis";
import Character from "./components/Character";

/*function waitFor(delay) {
  return new Promise((res) => setTimeout(res, delay));
}*/

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  async function getCharacters() {
    // await waitFor(100);
    const character1 = await getCharacterById(1);
    const character2 = await getCharacterById(2);
    const character3 = await getCharacterById(3);
    const character4 = await getCharacterById(4);
    const character5 = await getCharacterById(5);
    const character6 = await getCharacterById(6);
    const character7 = await getCharacterById(7);

    main.append(
      Character({
        name: character1.name,
        imgSrc: character1.image,
      }),
      Character({
        name: character2.name,
        imgSrc: character2.image,
      }),
      Character({
        name: character3.name,
        imgSrc: character3.image,
      }),
      Character({
        name: character4.name,
        imgSrc: character4.image,
      }),
      Character({
        name: character5.name,
        imgSrc: character5.image,
      }),
      Character({
        name: character6.name,
        imgSrc: character6.image,
      }),
      Character({
        name: character7.name,
        imgSrc: character7.image,
      })
    );
  }

  getCharacters();

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
