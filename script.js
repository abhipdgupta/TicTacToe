let GO = false;
const player = ["X", "O"];

let currentplayer = player[0];
let currentplayerindex = 0;

let result = document.getElementById("result");
let board = ["", "", "", "", "", "", "", "", ""];

let blocks = document.querySelectorAll(".block");
let line = document.getElementsByClassName("line")[0];

document.getElementById("reset").onclick = () => {
  currentplayer = player[0]
  //checking out something
  currentplayerindex = 0;
  
  line.style = `top:50%;opacity:0`;
  line.classList.remove("line_animate");
  
  GO = false;
  board = ["", "", "", "", "", "", "", "", ""];
  blocks.forEach((block) => {
    block.innerHTML = `<p></p>`;
  });
  document.getElementById("reset").innerHTML = "<h1>Reset</h1>";
  result.innerHTML = `<h1>WINNER IS </h1>`;
};
// console.log(blocks)
blocks.forEach((block, index) => {
  block.addEventListener("click", (e) => {
    if (board[index] === "" && GO != true) {
      // console.log(index)
      board[index] = currentplayer;
      block.innerHTML = `<p>${currentplayer}</p>`;

      if (winner() == true) {
        line.classList.add("line_animate");
        result.innerHTML = `<h1>WINNER IS ${currentplayer}</h1>`;

        document.getElementById("reset").innerHTML = "<h1>Play Again</h1>";

        GO = true;
      } else if (gameover() == true) {
        // console.log("gameover");
        // GO=true
        document.getElementById("reset").innerHTML = "<h1>Play Again</h1>";
        result.innerHTML = `<h1>DRAW</h1>`;
      }
      currentplayerindex += 1;
      currentplayer = player[currentplayerindex % 2];
    }

    // console.log(board)
  });
});

const winner = () => {
  if (board[0] != "" && board[0] == board[1] && board[0] == board[2]) {
    line.style = `top:16%`;
    return true;
  }
  if (board[3] != "" && board[3] == board[4] && board[3] == board[5]) {
    line.style=`top:50%`;
    return true;
  }
  if (board[6] != "" && board[6] == board[7] && board[6] == board[8]) {
    line.style = `top:84%`;
    return true;
  }

  if (board[0] != "" && board[0] == board[3] && board[0] == board[6]) {
    line.style = `
    left:-66%;
    transform:rotate(90deg);
     `;
    return true;
  }

  if (board[1] != "" && board[1] == board[4] && board[1] == board[7]) {
    line.style = `transform:rotate(90deg);`;
    return true;
  }

  if (board[2] != "" && board[2] == board[5] && board[2] == board[8]) {
    line.style = `
    right:-66%;
    transform:rotate(90deg);`;
    return true;
  }

  if (board[0] != "" && board[0] == board[4] && board[0] == board[8]) {
    line.style = `transform: rotate(45deg);`;
    return true;
  }

  if (board[2] != "" && board[2] == board[4] && board[2] == board[6]) {
    line.style = `transform: rotate(-45deg)`;
    return true;
  }
};

const gameover = () => {
  for (let i = 0; i < 9; i++) {
    if (board[i] == "") {
      return false;
    }
  }

  return true;
};
