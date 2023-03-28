// imports stories from json file
import scenarios from "./data/scenarios.json" assert { type: "json" };
// declares anchor container app to render within
const anchor = document.querySelector("main");
// declares a variable for the intiialze game button
const initButton = document.querySelector('#init button')
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
    render: index => console.log(scenarios[index])
  }
};

// function to render scenarios on screen
const renderScenarios = (scenarios) => {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  const click = (e) => console.log('clicked', e)
  scenarios.data.map((scene, i) => 
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
  const madlibs = document.querySelectorAll('.game ul li')
  madlibs.forEach((madlib, i) => madlib.addEventListener('click', () => scenarios.render(i)))
};

initButton.onclick = () =>
  renderScenarios(collectScenarios());
