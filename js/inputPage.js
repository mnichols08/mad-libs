const stories = '../stories./js'
const inputPage = `
<section>
    <h2>Millions of &lt;nouns/&gt;</h2>
    <form>
      <h3>Fill in the blank fields below.</h3>
      <div>
        <label for="place">Enter a Place: </label>
        <input type="text" name="place" id="place" required />
      </div>
      <div>
        <label for="noun">Enter a Noun: </label>
        <input type="text" name="noun" id="noun" required />
      </div>
      <div>
        <label for="secondNoun">Enter a Second Noun: </label>
        <input type="text" name="secondNoun" id="secondNoun" required />
      </div>
      <div>
        <label for="rhymesWithSecondNoun">Enter a word that rhymes with the previous: </label>
        <input type="text" name="rhymesWithSecondNoun" id="rhymesWithSecondNoun" required />
      </div>
      <div>
        <label for="typeOfBuilding">Enter a type of building: </label>
        <input type="text" name="typeOfBuilding" id="typeOfBuilding" required />
      </div>
      <div>
        <label for="adjective">Enter an adjective: </label>
        <input type="text" name="adjective" id="adjective" required />
      </div>
      <div>
        <label for="appendage">Enter an appendage: </label>
        <input type="text" name="appendage" id="appendage" required />
      </div>
      <div>
        <label for="typeOfFood">Enter a type of food: </label>
        <input type="text" name="typeOfFood" id="typeOfFood" required />
      </div>
      <div>
        <input type="submit" value="&gt; Go Mad" />
      </div>
    </form>
  </section>
`;

export default inputPage;