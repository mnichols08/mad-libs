import stories from './stories.js'
const storySelect = `
<section class="game">
    <h2>Please select one of the stories below to play:</h2>
    <ul class="flex wrap no-list center">
      ${stories.map((story, i) => {
        return `
        <li>
        <div>
          <img
            src="https://placehold.jp/150x150.png"
            alt="placeholder description"
          />
          <h3>${story.title}</h3>
          <button id='${i}'>${story.content}</button>
        </div>
      </li>
        `;
      })}
    </ul>
  </section>
`;

export default storySelect;