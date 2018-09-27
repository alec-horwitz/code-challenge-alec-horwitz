const assert = require('assert');
const Game = require('../models/Game');

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal as many cards as possible to the players provided.
 * @param {Player[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealAll = (players, deck) => {
    assert(players != null, 'Players cannot be null');
    assert(deck != null, 'Deck cannot be null');

    const remader = deck.cards.length % players.length
    const numberOfCardsPerPlayer = (deck.cards.length-remader) / players.length

    let deckCardsLength = deck.cards.length

    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < numberOfCardsPerPlayer; j++) {
        let card = deck.cards[Math.floor(Math.random()*deckCardsLength)];
        players[i].cards = [...players[i].cards, card]
        let index = deck.cards.indexOf(card)
        deck.cards = [...deck.cards.slice(0,index), ...deck.cards.slice(index+1)];
        deckCardsLength = deck.cards.length
      }
    }



    // TODO: this is where the work goes

    assert(remader != deckCardsLength, 'Wrong number of cards delt');
    return new Game(players, deck.getCards());

    // if (remader == deckCardsLength) {
    //   // TODO: this is NOT the correct solution, it is simply returning the input values
    // } else {
    //   console.log("ERROR: Wrong number of cards delt! Bugged code identified");
    // }



};

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal the specified number of cards to the players provided.
 * @param {PLayer[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @param {number} numberOfCardsPerPlayer The number of cards to deal to each player.
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealSome = (players, deck, numberOfCardsPerPlayer) => {
    assert(players != null, 'players cannot be null');
    assert(deck != null, 'deck cannot be null');
    assert(numberOfCardsPerPlayer != null, 'numberOfCardsPerPlayer cannot be null');

    const remader = deck.length - (players.length * numberOfCardsPerPlayer)
    assert(remader < 0, `numberOfCardsPerPlayer cannot be greater then the length of the cards list in deck divided by the length of the players list`);

    let deckCardsLength = deck.cards.length

    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < numberOfCardsPerPlayer; j++) {
        let card = deck.cards[Math.floor(Math.random()*deckCardsLength)];
        players[i].cards = [...players[i].cards, card]
        let index = deck.cards.indexOf(card)
        deck.cards = [...deck.cards.slice(0,index), ...deck.cards.slice(index+1)];
        deckCardsLength = deck.cards.length
      }
    }



    // TODO: this is where the work goes

    assert(remader != deckCardsLength, 'Wrong number of cards delt');
    return new Game(players, deck.getCards());


    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input values
    return new Game(players, deck.getCards());
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided Deck.
 * @param {Deck} deck The Deck to shuffle
 * @return {Deck} the shuffled deck
 */
const shuffleDeck = (deck) => {
    assert(deck != null, 'Deck cannot be null');

    for (var i = 0; i < deck.cards.length; i++) {
      deck.cards[i] = deck.cards[Math.floor(Math.random()*deck.cards.length)]
    }

    let newDeck = []
    let deckLength = deck.cards.length
    const maxCards = deckLength

    for (var i = 0; i < maxCards; i++) {
      let card = deck.cards[Math.floor(Math.random()*deckLength)];
      newDeck = [...newDeck, card]
      let index = deck.cards.indexOf(card)
      deck.cards = [...deck.cards.slice(0,index), ...deck.cards.slice(index+1)];
      deckLength = deck.cards.length
    }

    deck.cards = newDeck

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return deck;
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided list of Cards.
 * @param {Card[]} cards List of Cards to shuffle
 * @return {Card[]} the shuffled cards
 */
const shuffleCards = (cards) => {
    assert(cards != null, 'cards cannot be null');

    let newCards = []
    let cardsLength = cards.length
    const maxCards = cardsLength

    for (var i = 0; i < maxCards; i++) {
      let card = cards[Math.floor(Math.random()*cardsLength)];
      newCards = [...newCards, card]
      let index = cards.indexOf(card)
      cards = [...cards.slice(0,index), ...cards.slice(index+1)];
      cardsLength = cards.length
    }

    cards = newCards

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return cards;
};

module.exports = { dealAll, dealSome, shuffleDeck, shuffleCards };
