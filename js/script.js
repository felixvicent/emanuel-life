const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const start = document.querySelector(".start");
const end = document.querySelector(".end");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

function startGame() {
  start.style.display = "none";
  pipe.classList.add("started");

  const loop = setInterval(() => {
    var pipePosition = pipe.offsetLeft;
    var marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      gameOver(pipePosition, marioPosition);
      clearInterval(loop);
    }
  }, 10);
}

function gameOver(pipePosition, marioPosition) {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = "none";
  mario.style.bottom = `${marioPosition}px`;

  mario.src = "./images/game-over.png";
  mario.style.width = "75px";
  mario.style.marginLeft = "50px";

  end.style.display = "flex";
}

function restartGame() {
  location.reload();
}

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
