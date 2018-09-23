describe('cardDealer.js', () => {
    const cardDealer = require('./cardDealer');
    const Deck = require('../models/Deck');
    const Player = require('../models/Player');

    /**
     * TODO: Test Engineering Open Code Challenge
     * TODO: The following block is currently ignored (via the .skip annotation) because the supporting code is incomplete
     * Compare an unshuffled Deck of Cards with a shuffled Deck of Cards
     * that is produced by CardDealer.shuffleDeck().
     */
    describe('Compare an unshuffled deck with a shuffled deck', () => {
        it.skip('a shuffled deck should not match an unshuffled deck', () => {
            const unshuffledDeck = new Deck();
            const deckToShuffle = new Deck();

            expect(deckToShuffle.equals(unshuffledDeck)).toEqual(true);
            expect(deckToShuffle.getCards()).toEqual(unshuffledDeck.getCards());

            cardDealer.shuffleDeck(deckToShuffle);

            expect(deckToShuffle.equals(unshuffledDeck)).toEqual(false);
            expect(deckToShuffle.getCards()).not.toEqual(unshuffledDeck.getCards());
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * TODO: The following block is currently ignored (via the .skip annotation) because the supporting code is incomplete
     * Compare the unshuffled cards produced by Deck.getCards() with the shuffled cards that are produced by
     * CardDealer.shuffleCards()
     */
    describe('Compare unshuffled cards with shuffled cards', () => {
        it.skip('shuffled cards should not match unshuffled cards', () => {
            const unshuffledCards = new Deck().getCards();
            const cardsToShuffle = new Deck().getCards();

            expect(cardsToShuffle).toEqual(unshuffledCards);

            cardDealer.shuffleCards(cardsToShuffle);

            expect(cardsToShuffle).not.toEqual(unshuffledCards);
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * Verify that CardDealer.dealAll() correctly deals Card to all of the
     * Players provided. Don't just do a happy path approach!
     */
    describe('.dealAll()', () => {
        it('should correctly deal cards to all players', () => {
            // get a deck of cards
            const deck = new Deck();

            // TODO: generate a list of players
            const players = [
                new Player('You'),
                new Player('Me'),
                new Player('Dupree')
            ];

            // TODO: replace the following once the corresponding CardDealer.dealAll functionality is working
            // TODO: and complete all of the appropriate assertions
            const game = cardDealer.dealAll(players, deck); // eslint-disable-line
        });
    });

    /**
     * TODO: Test Engineering Open Code Challenge
     * Verify that CardDealer.dealSome() correctly deals the specified number of Cards
     * to each of the Players provided. Don't just do a happy path approach!
     */
    describe('.dealSome()', () => {
        it('should correctly deal cards to all players', () => {
            // get a deck of cards
            const deck = new Deck();

            // TODO: generate a list of players
            const players = [
                new Player('You'),
                new Player('Me'),
                new Player('Dupree')
            ];

            const numberOfCards = 5;

            // TODO: replace the following once the corresponding CardDealer deal functionality is working
            // TODO: and complete all of the appropriate assertions
            const game = cardDealer.dealSome(players, deck, numberOfCards); // eslint-disable-line
        });
    });
});
