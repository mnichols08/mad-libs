import header from "./js/header.js";
import footer from "./js/footer.js";
import inputPage from "./js/inputPage.js";
import storySelect from "./js/storySelect.js";
import stories from "./js/stories.js";

(function () {
  const createEle = (ele, content, anchor) => {
    const container = document.createElement(ele);
    container.innerHTML = content;
    anchor.append(container);
    return container;
  };

  const page = `
  <section>
        <h2>Welcome</h2>
        <p>Fill in the blanks and be the funniest person in the Room!</p>
        <button id="start">&gt; GO MAD</button>
      </section>
  `;
  const app = `
		${header}
		<main>
			${page}
		</main>
        ${footer}
		`;

  const root = createEle("root", app, document.body);
  const main = document.querySelector("main");
  const startButton = document.getElementById("start");
  const init = () => (main.innerHTML = ``);
  startButton.addEventListener("click", (e) => {
    init();
    const story = createEle("section", storySelect, main);
    const renderStory = () => {
      init();
    };
    const initStory = () => {
      init();
      const input = createEle("section", inputPage, main);
      let place,
        noun,
        secondNoun,
        rhymesWithSecondNoun,
        typeOfBuilding,
        adjective,
        appendage,
        typeOfFood;

      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        place = document.getElementById("place").value;
        noun = document.getElementById("noun").value;
        secondNoun = document.getElementById("secondNoun").value;
        rhymesWithSecondNoun = document.getElementById(
          "rhymesWithSecondNoun"
        ).value;
        typeOfBuilding = document.getElementById("typeOfBuilding").value;
        adjective = document.getElementById("adjective").value;
        appendage = document.getElementById("appendage").value;
        typeOfFood = document.getElementById("typeOfFood").value;
        init();
        createEle('section', stories[0].render(
          place,
          noun,
          secondNoun,
          rhymesWithSecondNoun,
          typeOfBuilding,
          adjective,
          appendage,
          typeOfFood
        ).split('\n').map(line => `<p>${line}</p>`), main)
      });
    };

    story.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", (e) => {
        init();
        initStory(e.target.id);
      })
    );
  });
})();
