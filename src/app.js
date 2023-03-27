import "./styles/app.scss";
import stories from './scripts/stories.json' assert {type: 'json'};
const anchor = document.querySelector("main");
const startButton = document.querySelector("#init button");
const createEle = (ele, content, root) => {
  let container = document.createElement(ele);
  container.innerHTML = content;
  root.append(container);
};
const init = () => (anchor.innerHTML = "");

const choose = () => {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  stories.map((story) =>
    createEle(
      "li",
      `
            <div>
              <img
                src="https://placehold.jp/150x150.png"
                alt="placeholder description"
              />
              <a href="input.html"><h3>${story.Scenario_title}</h3></a>
            </div>

    `,
      ul
    )
  );
  init();
  section.classList.add("game");
  heading.innerText = "Please select one of the stories below to play:";
  section.prepend(heading);
  section.append(ul);
  anchor.append(section);
  ul.classList = "flex wrap no-list center"
};
startButton.onclick = choose;
