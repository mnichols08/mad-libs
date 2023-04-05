import badwordsArray from './badwords.json';

const pegarDifferenca = (responses) => {
    let caughtWords;
    if (responses) caughtWords = responses.filter(word => badwordsArray.includes(word))
    if (caughtWords && caughtWords.length > 0) return false, alert('you is a bad bad bad wittle putty tat')
    else return true
}


export default pegarDifferenca;
// buttonSubmit.addEventListener("click", function (event) {
//   event.preventDefault();
//   let checkWord = document.querySelectorAll("input");
//   let valueCheck = [].map.call(checkWord, function (input) {
//     return input.value;
//   });
//   function pegarDiferenca(x) {
//     let r3 = x.filter((a) => badwordsArray.includes(a));
//     if (r3 !== "") {
//       console.log(r3);
//     }
//   }
//   pegarDiferenca(valueCheck);
// });
