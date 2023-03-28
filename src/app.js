// imports stories from json file
import stories from './data/scenarios.json' assert {type: 'json'};
// declares anchor container app to render within
const anchor = document.querySelector("main");
// function to clear the app on demand
const clear = () => (anchor.innerHTML = "");
// function to initialize the app on demand
const init = () => {
  clear();
  anchor.innerHTML = `
  <section id="init">
        <h2>Welcome</h2>
        <p>Fill in the blanks and be the funniest person in the Room!</p>
        <button>&gt; GO MAD</button>
  </section>
  `;
};
// function to collect scenarios and return them
const collectScenarios = () => stories;
// initializes the app on body page load.
document.body.onload = init;