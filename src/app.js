// imports stories from json file
import scenarios from "./data/scenarios.json" assert { type: "json" };
// declares anchor container to render our app within
const anchor = document.querySelector("main");
// declares a variable for the intiialze game button
const homeButton = document.querySelector("h1");
// function to clear the app on demand
const clear = () => (anchor.innerHTML = "");
// function to create an element, set the innerHTML to content, and append it to a root element
const createEle = (ele, content, root) => {
  let container = document.createElement(ele);
  container.innerHTML = content;
  root.append(container);
};
// function to collect scenarios and return them
const collectScenarios = () => {
  return {
    data: scenarios,
    renderStory: (index, values, keys) =>
      renderStoryPage(
        scenarios[index].Scenario,
        values,
        scenarios[index].Scenario_title,
        index,
        keys
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
const renderStoryPage = (scenario, values, title, index, keys) => {
  const section = document.createElement("section");
  let story;
  createEle("h2", title, section);
  // keys.forEach((key, i) => story = scenario.replaceAll(`{${key}}`, values[i]))
  // Because I cannot for the life of me figure out a good approach to handling the handling each scenario dynamically, we will have to manually code them below in a switch statement unless we can figure that one as a team XD
  switch (index) {
    case 0:
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

// function to render inputs
const renderInputPage = (title, variables, index) => {
  // error catching because not every JSON object have variables yet

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
    ); // renders responses from form into an array to be passed into the fucnction to collect scenarios
    collectScenarios().renderStory(index, formResponses, keys);
  });

  // creates a button at the bottom of the form
  createEle("div", `<input type="submit" value="&gt; Go Mad" />`, form);
  clear();
  section.append(form);
  anchor.append(section);
};
  const init = () => {
    clear()
    createEle('section', `
    <h2>Welcome</h2>
    <p>Fill in the blanks and be the funniest person in the Room!</p>
    <button>&gt; GO MAD</button>
    `, anchor)
    document.querySelector('button').onclick = () => renderScenarios(collectScenarios());
  }

document.body.onload = init;
homeButton.onclick = init;