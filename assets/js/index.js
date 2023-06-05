let preVal1 = null;
let preVal2 = null;
let defaultDice1 = true;
let defaultDice2 = true;
let player1Score;
let player2Score;
document.getElementById("myBtn").addEventListener("click", () => {
  diceroll1(1, 7);
  diceroll2(1, 7);
});

function diceroll1(min, max) {
  if (preVal1 !== null) {
    document.querySelector(`[data-dice="${preVal1}"]`).style.display = "none";
  }

  let dice1 = Math.floor(Math.random() * (max - min)) + min;
  player1Score = dice1;
  document.getElementById("player1Score").innerHTML = `SCORE=${player1Score}`;

  const player1 = document.querySelector(".player1");
  //console.log(player1);

  const a = player1.querySelectorAll(".player1 img");
  // console.log(a);
  if (defaultDice1) {
    document.querySelector(`.player1 [data-dice="6"]`).style.display = "none";
    defaultDice1 = false;
  }
  a.forEach((value) => {
    if (dice1 == value.dataset.dice) {
      document.querySelector(
        `.player1 [data-dice="${value.dataset.dice}"]`
      ).style.display = "block";
      // console.log(value.dataset.dice);
      preVal1 = dice1;
    }
  });
}
function diceroll2(min, max) {
  if (preVal2 !== null) {
    document.querySelector(`.player2 [data-dice="${preVal2}"]`).style.display =
      "none";
  }

  let dice2 = Math.floor(Math.random() * (max - min)) + min;
  player2Score = dice2;
  document.getElementById("player2Score").innerHTML = `SCORE=${player2Score}`;

  console.log(player1Score);
  console.log(player2Score);

  if (player1Score > player2Score) {
    document.getElementById("won").innerHTML = "WINNER IS : PLAYER-1";
  } else if (player1Score < player2Score) {
    document.getElementById("won").innerHTML = "WINNER IS : PLAYER-2";
  } else {
    document.getElementById("won").innerHTML = "WINNER IS : ";
  }

  const player2 = document.querySelector(".player2");

  const a = player2.querySelectorAll(".player2 img");

  if (player1Score === player2Score) {
    console.log("running");
    document.getElementById("myBtn").innerHTML = "Re-Rolling dices";
    document.getElementById("myBtn").style.cursor = "wait";
    setTimeout(() => {
      diceroll1(1, 7);
      diceroll2(1, 7);

      // document.getElementById("myBtn").innerHTML = "Roll Dices";
    }, 2000);
  }
  if (player1Score !== player2Score) {
    document.getElementById("myBtn").innerHTML = "Roll Dices";
    document.getElementById("myBtn").style.cursor = "pointer";
  } else {
    document.getElementById("myBtn").innerHTML = "Re-Rolling dices";
    document.getElementById("myBtn").style.cursor = "wait";
  }
  // console.log(a);
  if (defaultDice2) {
    document.querySelector(`.player2 [data-dice="6"]`).style.display = "none";
    defaultDice2 = false;
  }
  a.forEach((value) => {
    if (dice2 == value.dataset.dice) {
      document.querySelector(
        `.player2 [data-dice="${value.dataset.dice}"]`
      ).style.display = "block";
      preVal2 = dice2;
    }
  });
}
