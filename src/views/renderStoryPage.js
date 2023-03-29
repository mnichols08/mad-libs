import clear, { anchor } from "./clear";
import createEle from "../utils/createEle";
// function to render a story page
const renderStoryPage = (scenario, values, title, index) => {
  const [
    place,
    noun,
    secondNoun,
    rhymesWithSecondNoun,
    typeOfBuilding,
    adjective,
    appendage,
    typeOfFood,
  ] = values;
  const section = document.createElement("section");
  createEle("h2", title, section);
  switch (index) {
    case 0:
      scenario
        .replaceAll("{{place}}", place)
        .replaceAll("{{noun}}", noun)
        .replaceAll("{{secondNoun}}", secondNoun)
        .replaceAll("{{rhymesWithSecondNoun}}", rhymesWithSecondNoun)
        .replaceAll("{{typeOfBuilding}}", typeOfBuilding)
        .replaceAll("{{adjective}}", adjective)
        .replaceAll("{{appendage}}", appendage)
        .replaceAll("{{typeOfFood}}", typeOfFood)
        .split("\\n")
        .map((line) => createEle("p", line, section));
      clear();
      anchor.append(section);
      break;
    default:
      console.error(`Sorry, something went wrong.`);
  }
};

export default renderStoryPage;
