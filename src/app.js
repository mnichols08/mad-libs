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
    renderStory: (index, values) =>
      renderStoryPage(
        scenarios[index].Scenario,
        values,
        scenarios[index].Scenario_title,
        index
      ),
    renderInputs: (index) =>
      renderInputPage(
        scenarios[index].Scenario_title,
        scenarios[index].Variables,
        index
      ),
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
    madlib.addEventListener("click", () => scenarios.renderInputs(i))
  );
};

// function to render a story page
const renderStoryPage = (scenario, values, title, index) => {
  const section = document.createElement("section");
  createEle("h2", title, section);
  switch (index) {
    case 0:
      let [
        place,
        noun,
        secondNoun,
        rhymesWithSecondNoun,
        typeOfBuilding,
        adjective,
        appendage,
        typeOfFood,
      ] = values;
      let nounScenario = scenario
        .replaceAll("{{place}}", place)
        .replaceAll("{{noun}}", noun)
        .replaceAll("{{secondNoun}}", secondNoun)
        .replaceAll("{{rhymesWithSecondNoun}}", rhymesWithSecondNoun)
        .replaceAll("{{typeOfBuilding}}", typeOfBuilding)
        .replaceAll("{{adjective}}", adjective)
        .replaceAll("{{appendage}}", appendage)
        .replaceAll("{{typeOfFood}}", typeOfFood);
      nounScenario = nounScenario.split('\\n')
      nounScenario.map(line => createEle('p', line, section))
      clear();
      anchor.append(section);
      break;
    default:
      console.log(`Sorry, something went wrong.`);
  }
};

// function to render inputs
const renderInputPage = (title, variables, index) => {
  // maps over the inputs array to extract the key values from it
  const keys = variables.map((variable) => Object.keys(variable).toString());
  const placeholders = variables.map((variable, i) => variable[keys[i]]);
  const section = document.createElement("section");
  const form = document.createElement("form");
  // renders the text on screen
  createEle("h2", title, section); // dynamically changes the title
  createEle("h3", "Fill in the blank fields below.", form);
  // Maps over the keys array to render divs with labels and placeholders for form inputs
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
  // event listener must be inside of this function as this is where the form is rendered.
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops page from following default protocol to process the form
    const formResponses = [...new FormData(e.target).entries()].map(
      (data) => data[1]
    ); // renders responses from form into an array to be passed into next function
    collectScenarios().renderStory(index, formResponses);
  });

  // creates a button at the bottom of the form
  createEle("div", `<input type="submit" value="&gt; Go Mad" />`, form);
  clear();
  section.append(form);
  anchor.append(section);
};

// event listeners to handle user inputs
initButton.onclick = () => renderScenarios(collectScenarios());
