/*---Constants---*/
// const dealer
// const player


/*---Variables---*/
let deck = [
  {
      name: "dA",
      value: 11,
  },
  {
      name: "dQ",
      value: 10,
  },
  {
      name: "dK",
      value: 10,
  },
  {
      name: "dJ",
      value: 10,
  },
  {
      name: "d10",
      value: 10,
  },
  {
      name: "d09",
      value: 9,
  },
  {
      name: "d08",
      value: 8,
  },
  {
      name: "d07",
      value: 7,
  },
  {
      name: "d06",
      value: 6,
  },
  {
      name: "d05",
      value: 5,
  },
  {
      name: "d04",
      value: 4,
  },
  {
      name: "d03",
      value: 3,
  },
  {
      name: "d02",
      value: 2,
  },
  {
      name: "hA",
      value: 11,
  },
  {
      name: "hQ",
      value: 10,
  },
  {
      name: "hK",
      value: 10,
  },
  {
      name: "hJ",
      value: 10,
  },
  {
      name: "h10",
      value: 10,
  },
  {
      name: "h09",
      value: 9,
  },
  {
      name: "h08",
      value: 8,
  },
  {
      name: "h07",
      value: 7,
  },
  {
      name: "h06",
      value: 6,
  },
  {
      name: "h05",
      value: 5,
  },
  {
      name: "h04",
      value: 4,
  },
  {
      name: "h03",
      value: 3,
  },
  {
      name: "h02",
      value: 2,
  },
  {
      name: "cA",
      value: 11,
  },
  {
      name: "cQ",
      value: 10,
  },
  {
      name: "cK",
      value: 10,
  },
  {
      name: "cJ",
      value: 10,
  },
  {
      name: "c10",
      value: 10,
  },
  {
      name: "c09",
      value: 9,
  },
  {
      name: "c08",
      value: 8,
  },
  {
      name: "c07",
      value: 7,
  },
  {
      name: "c06",
      value: 6,
  },
  {
      name: "c05",
      value: 5,
  },
  {
      name: "c04",
      value: 4,
  },
  {
      name: "c03",
      value: 3,
  },
  {
      name: "c02",
      value: 2,
  },
  {
      name: "sA",
      value: 11,
  },
  {
      name: "sQ",
      value: 10,
  },
  {
      name: "sK",
      value: 10,
  },
  {
      name: "sJ",
      value: 10,
  },
  {
      name: "s10",
      value: 10,
  },
  {
      name: "s09",
      value: 9,
  },
  {
      name: "s08",
      value: 8,
  },
  {
      name: "s07",
      value: 7,
  },
  {
      name: "s06",
      value: 6,
  },
  {
      name: "s05",
      value: 5,
  },
  {
      name: "s04",
      value: 4,
  },
  {
      name: "s03",
      value: 3,
  },
  {
      name: "s02",
      value: 2,
  }
];
let dealerHand;
let playerHand;


/*---Cached Element References---*/
const dealerPlayArea = document.getElementById('dealerPlayArea');
const playerPlayArea = document.getElementById('playerPlayArea');



/*---Event Listeners---*/
document.querySelector(".start").addEventListener('click', init);



/*---Functions---*/
//init()

function init() {
  dealerHand = [];
  playerHand = [];
  dealCards()
  console.log(dealerHand);
}

function getSelectedCard(){
  return deck.splice(Math.floor(Math.random()*deck.length),1)
}

function dealCards() {
  selectedCard = getSelectedCard();
  dealerHand.push(selectedCard[0])

  selectedCard = getSelectedCard();
  dealerHand.push(selectedCard[0])

  selectedCard = getSelectedCard();
  playerHand.push(selectedCard[0])

  selectedCard = getSelectedCard();
  playerHand.push(selectedCard[0])
}

function render() {
    dealerPlayArea.innerHTML = '';
    dealerHand.forEach(function(card, idx) {
     console.log(card.name);
            const appendCard = document.createElement('div');
            appendCard.className = `card large ${card.name}`;
            dealerPlayArea.appendChild(appendCard);
            if (idx === 0) {
               appendCard.className = `card large back`;
            }
    });

    playerPlayArea.innerHTML = '';
    playerHand.forEach(function(card, idx) {
     console.log(card.name);
            const appendCard = document.createElement('div');
            appendCard.className = `card large ${card.name}`;
            playerPlayArea.appendChild(appendCard);
    });
}

function dealerHit() {
    selectedCard = getSelectedCard();
    dealerHand.push(selectedCard[0])
}

function playerHit() {
    selectedCard = getSelectedCard();
    playerHand.push(selectedCard[0])
}



// if idx = 0 make class .back 

