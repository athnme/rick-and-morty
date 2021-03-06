export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}


export async function getCharacterS(name, page = 1) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  if (name) {
    url += `&name=${name}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
=======
export async function getCharacterS() {
  const url = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;

}
