import '../styles/app.scss';
import clear, { anchor } from "./clear";
import createEle from "../utils/createEle";
import renderScenarios from "./renderScenarios";
import collectScenarios from "../controller/collectScenarios.js";
const homeButton = document.querySelector('h1')

const init = () => {
  clear();
  createEle(
    "section",
    `
    <h2>Welcome</h2>
    <p>Fill in the blanks and be the funniest person in the Room!</p>
    <button>&gt; GO MAD</button>
    `,
    anchor
  );
  document.querySelector("button").onclick = () =>
    renderScenarios(collectScenarios());
};

homeButton.onclick = init;

export default init;
