// declares anchor container to render our app within
export const anchor = document.querySelector("main");

const clear = () => (anchor.innerHTML = "");

export default clear;
