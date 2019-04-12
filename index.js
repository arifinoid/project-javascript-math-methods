const roll = () => {
  const player = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;
  const playerDice = `/images/Dice-${player}.png`;
  const computerDice = `/images/Dice-${computer}.png`;

  document.querySelector(".playerdice img").setAttribute("src", playerDice);
  document.querySelector(".computerdice img").setAttribute("src", computerDice);

  if (player > computer) {
    document.querySelector("h1").innerHTML = "You Win";
  } else if (player < computer) {
    document.querySelector("h1").innerHTML = "You Lose";
  } else {
    document.querySelector("h1").innerHTML = "Tie. Try again";
  }
};
