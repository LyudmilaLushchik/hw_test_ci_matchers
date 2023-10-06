export default function sortedCharacters(listOfCharacters) {
  return listOfCharacters.sort((a, b) => b.health - a.health);
}
