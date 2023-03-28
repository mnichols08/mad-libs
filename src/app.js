// imports stories from json file
import scenarios from "./data/scenarios.json" assert { type: "json" };
// declares anchor container app to render within
const anchor = document.querySelector("main");
// declares a variable for the intiialze game button
const initButton = document.querySelector("#init button");
// function to clear the app on demand
const clear = () => (anchor.innerHTML = "");
// function to create an element, set the innerHTML, and append it to another element
const createEle = (ele, content, root) => {
  let container = document.createElement(ele);
  container.innerHTML = content;
  root.append(container);
};
// function to collect scenarios and return them
const collectScenarios = () => {
  return {
    data: scenarios,
    render: (index) => renderInputs(scenarios[index].Scenario_title, scenarios[index].Variables),
  };
};

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
  ul.classList = "flex wrap no-list center";
  // Loop over all of the list items we just created and add an even listener to them, passing the index of the Madlib into the list item that is clicked upon.
  const madlibs = document.querySelectorAll(".game ul li");
  madlibs.forEach((madlib, i) =>
    madlib.addEventListener("click", () => scenarios.render(i))
  );
};

// function to render inputs
const renderInputs = (title, variables) => {
  // maps over the inputs array to extract the key values from it
  const keys = variables.map((variable) => Object.keys(variable).toString());
  const placeholders = variables.map((variable, i) => variable[keys[i]]);
  const section = document.createElement("section");
  const form = document.createElement("form");
  const heading = document.createElement("h3");
  createEle('h2',title,section);
  heading.innerText = 'Fill in the blank fields below.'
  keys.map((key, i) =>
    createEle(
      "div",
      `
        <label for="${key}">${placeholders[i]}: </label>
        <input type="text" name="${key}" id="${key}" required />
      `,
      form
    )
  );
  createEle("div", `<input type="submit" value="&gt; Go Mad" />`, form);
  clear()
  section.append(form)
  anchor.append(section)
};

initButton.onclick = () => renderScenarios(collectScenarios());
