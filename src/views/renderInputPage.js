import clear, { anchor } from "./clear";
import createEle from "../utils/createEle";
import collectScenarios from "../controller/collectScenarios";
import pegarDifferenca from "../utils/curseFilter";

// function to render inputs
const renderInputPage = (title, variables, index) => {
  // maps over the inputs array to extract the key values from it
  const keys = Object.keys(variables);
  const placeholders = keys.map((key) => variables[key]);
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
    ); // converts responses from form into an array to be passed into the function to collect scenarios
    if (pegarDifferenca(formResponses)) // checks the responses given against a badword filter
      collectScenarios().renderStory(index, formResponses, keys); // render the story since it passed the check
  });

  // creates a button at the bottom of the form
  createEle("div", `<input type="submit" value="&gt; Go Mad" />`, form);
  clear();
  section.append(form);
  anchor.append(section);
};

export default renderInputPage;
