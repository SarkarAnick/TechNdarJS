const generateDeck = () => {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1); // so we delete the card we got from the deck
  return card;
};

const checkScore = (hand) => {
  let total = 0;

  for (const cardObject of hand) {
    //check if k,q,j
    if (cardObject.card === "King") {
      total += 10;
    } else if (cardObject.card === "Queen") {
      total += 10;
    } else if (cardObject.card === "Jack") {
      total += 10;
    }
    //check if Ace
    else if (cardObject.card === "Ace") {
      total += 1;
    }
    // otherwise 2-10
    else {
      total = total + cardObject.card * 1; // you can convert a string(containing a number) into a number by multiplying it with 1 // or u can do Number(cardObject.card)
    }
  }
 
  return total;
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck)); // the reason for passing myDeck to drawcard() is , so that drawcard doesnt work arbitrarily and only work when the deck is passed to it
playerHand.push(drawCard(myDeck));

dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("the starting player hand : ",playerHand);
console.log("the starting player score : ",checkScore(playerHand));
console.log("the starting dealer hand : ",dealerHand);
console.log("the starting dealer hand : ",checkScore(dealerHand));

while (true) {
  //deal player card
  playerHand.push(drawCard(myDeck));
  //check if player bust(over 21)
  const playerScore = checkScore(playerHand);
  let dealerScore = checkScore(dealerHand);
  if (playerScore > 21) {
    console.log(
      `you lose . your final score : ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
  //check if player 21
  if (playerScore === 21) {
    console.log(
      `you win your final score : ${playerScore} while the dealer had ${dealerScore}`
    );
    break
  }
  //deal dealer card
  dealerHand.push(drawCard(myDeck));
  //check if dealer bust(over 21)
  if (dealerScore > 21) {
    console.log(
      `you win your final score : ${playerScore} while the dealer had ${dealerScore}`
    );
    break
  }
  //check if dealer 21
  if (dealerScore === 21) {
    console.log(
      `you lose . your final score : ${playerScore} while the dealer had ${dealerScore}`
    );
    break
  }
}

console.log("the ending player hand : " ,playerHand);
console.log("the ending player score : ",checkScore(playerHand));
console.log("the ending dealer hand : " , dealerHand);
console.log("the ending dealer hand : " ,checkScore(dealerHand));
