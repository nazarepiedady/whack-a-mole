const squareList = document.querySelectorAll('.square');
const moleList = document.querySelectorAll('.mole');
const $timeLeft = document.querySelector('#time-left');
let $score = document.querySelector('#score');

let result = 0;

function randomSquare() {
  squareList.forEach($square => { $square.classList.remove('mole') });
  let $randomSquare = squareList[Math.floor(Math.random() * 9)];
  $randomSquare.classList.add('mole');
  
  // assign the id of the randomSquare to hitPosition for us to use later
  hitPosition = $randomSquare.id;
}

squareList.forEach($square => {
  $square.addEventListener('mouseup', () => {
    if ($square.id === hitPosition) {
      result = result + 1;
      $score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();