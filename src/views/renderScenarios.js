import clear, { anchor } from "./clear";
import createEle from "../utils/createEle";
// function to render scenarios on screen
const renderScenarios = (scenarios) => {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  scenarios.data.map((scene) =>
    createEle(
      "li",
      `
              <div>
                <img
                  src="https://placehold.jp/150x150.png"
                  alt="placeholder description"
                />
                <a href="#"><h3>${scene.Scenario_title}</h3></a>
              </div>`,
      ul
    )
  );
  clear();
  section.classList.add("game");
  heading.innerText = "Please select one of the stories below to play:";
  section.prepend(heading);
  section.append(ul);
  anchor.append(section);
  ul.classList = "flex wrap no-list center evenly";
  // Loop over all of the list items we just created and add an even listener to them, passing the index of the Madlib into the list item that is clicked upon.
  const madlibs = document.querySelectorAll(".game ul li");
  madlibs.forEach((madlib, i) =>
    madlib.addEventListener("click", () => scenarios.renderInputs(i))
  );
};

export default renderScenarios;
