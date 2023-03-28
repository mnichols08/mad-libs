// imports stories from json file
import scenarios from "./data/scenarios.json" assert { type: "json" };
// declares anchor container app to render within
const anchor = document.querySelector("main");
// function to clear the app on demand
const clear = () => (anchor.innerHTML = "");
// function to initialize the app on demand
const init = () => {
  clear();
  anchor.innerHTML = `
  
  `;
};
// function to create an element, set the innerHTML, and append it to another element
const createEle = (ele, content, root) => {
  let container = document.createElement(ele);
  container.innerHTML = content;
  root.append(container);
};
// function to collect scenarios and return them
const collectScenarios = () => scenarios;

// function to render scenarios on screen
const renderScenarios = (scenarios) => {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  scenarios.map((madlib, i) =>
    createEle(
      "li",
      `
            <div>
              <img
                src="https://placehold.jp/150x150.png"
                alt="placeholder description"
              />
              <a href='#${i}'><h3>${madlib.Scenario_title}</h3></a>
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
  ul.classList = "flex wrap no-list center";
};

// initializes the app on body page load.
//document.body.onload = init;
document.querySelector("#init button").onclick = () =>
  renderScenarios(collectScenarios());
