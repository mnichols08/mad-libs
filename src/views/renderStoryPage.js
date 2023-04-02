import clear, { anchor } from "./clear";
import createEle from "../utils/createEle";
// function to render a story page
const renderStoryPage = (scenario, values, title, index, keys) => {
  const section = document.createElement("section"); // creates an html element to build page within
  let madlib = scenario;
  // loops over the values to render and replaces them with the key index
  values.forEach((value, i) => {
    const replaceVar = `{{${keys[i]}}}` // defines this key index using the index of this value
    madlib = madlib.replaceAll(replaceVar, value) // generates the mad lib by replacing all of the static variables with their passed in values
  })

  createEle("h2", title, section);   // renders the title
    madlib.split("\\n") // creates an array from the madlib, creating a new item for each line break
    .map((line) => createEle("p", line, section)); // maps over the newly created array and created `<p>` tags for each of them, and then appends them inside of the section created initally
  clear(); 
  anchor.append(section);
};

export default renderStoryPage;