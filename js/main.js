/*---Variables---*/

let dealerHand;
let playerHand;
let playerSum;
let dealerSum;
let flipCard;
// deck variable located in deck.js

/*---Cached Element References---*/

const dealerPlayArea = document.getElementById("dealerPlayArea");
const playerPlayArea = document.getElementById("playerPlayArea");
const gameStatusReport = document.getElementById("gameStatusReport");

/*---Event Listeners---*/

document.querySelector(".start").addEventListener("click", init);
document.querySelector(".hit").addEventListener("click", playerHit);
document.querySelector(".stand").addEventListener("click", dealerHit);

/*---Functions---*/

function init() {
  dealerHand = [];
  playerHand = [];
  flipCard = false;
  gameStatusReport.innerHTML = "";
  dealCards();
}

function sumPlayerHand() {
  playerSum = playerHand.reduce(function (a, b) {
    return a + b.value;
  }, 0);
}

function sumDealerHand() {
  dealerSum = dealerHand.reduce(function (a, b) {
    return a + b.value;
  }, 0);
}

function playerChooseOrLoose() {
  if (playerSum == 21) {
    gameStatusReport.innerHTML = "21";
  } else if (playerSum >= 22) {
    gameStatusReport.innerHTML = "You Bust";
  } else {
  }
}

function dealerAutomation() {
  sumDealerHand();

  if (dealerSum == 21) {
    gameStatusReport.innerHTML = "Dealer Wins";
  } else if (dealerSum >= 22) {
    gameStatusReport.innerHTML = "Dealer Bust";
  } else if (dealerSum <= 17) {
    dealerHit();
  } else if (dealerSum > playerSum) {
    gameStatusReport.innerHTML = "Dealer Wins";
  } else {
    gameStatusReport.innerHTML = "You Win";
  }
}

function getSelectedCard() {
  return deck.splice(Math.floor(Math.random() * deck.length), 1);
}

function dealCards() {
  selectedCard = getSelectedCard();
  dealerHand.push(selectedCard[0]);

  selectedCard = getSelectedCard();
  dealerHand.push(selectedCard[0]);

  selectedCard = getSelectedCard();
  playerHand.push(selectedCard[0]);

  selectedCard = getSelectedCard();
  playerHand.push(selectedCard[0]);

  sumPlayerHand();

  render();
}

function render() {
  //   console.log(dealerHand);
  dealerPlayArea.innerHTML = "";
  dealerHand.forEach(function (card, idx) {
    //    console.log(card.name);
    const appendCard = document.createElement("div");
    appendCard.className = `card large ${card.name}`;
    dealerPlayArea.appendChild(appendCard);
    if (idx === 0 && flipCard === false) {
      appendCard.className = `card large back`;
    }
  });

  playerPlayArea.innerHTML = "";
  playerHand.forEach(function (card, idx) {
    const appendCard = document.createElement("div");
    appendCard.className = `card large ${card.name}`;
    playerPlayArea.appendChild(appendCard);
  });
}

function dealerHit() {
  flipCard = true;
  selectedCard = getSelectedCard();
  dealerHand.push(selectedCard[0]);

  sumDealerHand();

  render();

  dealerAutomation();
}

function playerHit() {
  selectedCard = getSelectedCard();
  playerHand.push(selectedCard[0]);

  sumPlayerHand();

  render();

  playerChooseOrLoose();
}
