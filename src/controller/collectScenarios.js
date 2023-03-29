// imports stories from json file
import scenarios from "../model/scenarios.json" assert { type: "json" };
import renderStoryPage from "../views/renderStoryPage.js";
import renderInputPage from "../views/renderInputPage";

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

export default collectScenarios;
