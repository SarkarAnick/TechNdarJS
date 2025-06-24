/*
    - Generate a deck of 52 cards (2-Ace, all 4 suits)
    
    - At the start of the game, the "dealer" and "player" each get dealt 2 random cards (no replacement)

-> The game plays itself according the the following behaviour:

    1. Continue while neither player has exceeded 21 points or gotten exactly 21
    
    2. The player is dealt a random card    

    3. If the player goes above 21, dealer wins If the player gets exactly 21, player wins
    
    4. The dealer is dealt a random card
  
    5. If the dealer goes above 21, player wins If the dealer gets exactly 21, player wins
    
    6. Repeat - go back to step 1

-> Point Breakdown:
    2-10: Actual Face Value
    Jack, Queen, King: 10   
    Ace: 1*

-> Logging:
    - Starting hands
    - Ending hands + who won + score
*/

//       *** TIPS TO SOLVE ***

/*
    Tips
    - Make sure you understand the requirements

    - How might you model a card so it has a value and a suit?
    Eg: { card: "King", suit: "Hearts" }

    - Create a function that creates a deck of cards for you
    Eg: const deck = generateDeck() // This might return an array of card Objects

    - Create a function that draws a card from a deck for you
    Eg: const card = drawCard(deck); // This might return a single card Object

    - Create a function that calculates a score for you, given a hand
    Eg: const score = checkScore(hand); // This might return the score of the hand as a Number

    - Can we create an infinite while loop that will only break under certain conditions?
    Eg:
        while(true) {
        deal player card
        did player bust? - break - player loses
        did player hit 21? - break - player wins

        deal dealer card
        did dealer bust? - break - player wins
        did dealer hit 21? - break - player loses
        }
*/