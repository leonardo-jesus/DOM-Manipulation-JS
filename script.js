function makeCircle() {
  let circle = `<div id='circle' style="background-color: rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber2()})">🇧🇷</div>`;
  document.body.innerHTML += circle;
}


for (let i = 0; i < 100; i++) {
  makeCircle();
}

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function randomNumber2() {
  return (Math.random() * 1).toFixed(1);
}

console.log((Math.random() * 1).toFixed(1))