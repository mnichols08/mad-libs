import header from "./js/header.js";
import footer from "./js/footer.js";
import inputPage from "./js/inputPage.js";
import storySelect from "./js/storySelect.js";
import gameInput from "./js/gameInput.js";
import millions from './js/stories/millions.js';

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
  const main = document.querySelector('main')
  const startButton = document.getElementById("start");
  const init = () => main.innerHTML = ``;
  startButton.addEventListener("click", (e) => {
    init();
    const story = createEle("section", storySelect, main);
    const renderStory = (id) => {
      init();
    };
    const initStory = (id) => {
      init();
      const input = createEle("section", inputPage, main);
    };

    story
      .querySelectorAll("button")
      .forEach((button) =>
        button.addEventListener("click", (e) => {
            init()
            initStory(e.target.id)
            console.log(millions('Intercourse', 'wang', 'parakeet', 'cherokee', 'pentagon', 'long', 'wang', 'mashed potatoes'))
        })
      );
  });
})();
