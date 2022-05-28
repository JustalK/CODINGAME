## Solution

```Javascript
const NUMBER_OF_PLAYER = 2

class Card {
    index = null;
    cardNumber = null;
    instanceId = null;
    location = null;
    cardType = null;
    cost = null;
    attack = null;
    defense = null;
    abilities = null;
    myHealthChange = null;
    opponentHealthChange = null;
    cardDraw = null;
    rank = null;

    constructor(index, inputs) {
        this.index = index;
        this.cardNumber = parseInt(inputs[0]);
        this.instanceId = parseInt(inputs[1]);
        this.location = parseInt(inputs[2]);
        this.cardType = parseInt(inputs[3]);
        this.cost = parseInt(inputs[4]);
        this.attack = parseInt(inputs[5]);
        this.defense = parseInt(inputs[6]);
        this.abilities = inputs[7];
        this.myHealthChange = parseInt(inputs[8]);
        this.opponentHealthChange = parseInt(inputs[9]);
        this.cardDraw = parseInt(inputs[10]);

        let score = this.attack + this.defense + this.myHealthChange + this.cardDraw - this.cost;
        if (this.abilities.includes('G')) {
            score += 100;
        }
        if (this.abilities.includes('B')) {
            score += 10;
        }
        this.rank = score;
    }
}

class Deck {
    cards = []

    addCard(card) {
        this.cards.push(card)
    }

    isStrongCardNeeded() {
        let numberOfStrongCard = 0;
        for(const card of this.cards) {
            if (card.cost > 6) {
                numberOfStrongCard++;
            }
        }
        return Math.floor(numberOfStrongCard/3)<(this.cards.length-numberOfStrongCard)
    }
}

class Player {
    mana = 0;
    health = 0;
    deck = new Deck();

    updateEveryTurn(inputs) {
        this.health = parseInt(inputs[0]);
        this.mana = parseInt(inputs[1]);
        inputs[2];
        const playerRune = parseInt(inputs[3]);
        const playerDraw = parseInt(inputs[4]);
    }
}

class Board {
    draft = []
    hand = []
    player = []
    ennemy = []

    updateEveryTurn() {
        this.draft = []
        this.hand = []
        this.player = []
        this.ennemy = []
        const cardCount = parseInt(readline());
        for (let i = 0; i < cardCount; i++) {
            const card = new Card(i, readline().split(' '));
            if (card.location === 1) {
                this.player.push(card);
            } else if(card.location === -1) {
                this.ennemy.push(card);
            } else {
                this.draft.push(card);
                this.hand.push(card);
            }
        }
        this.draft.sort((a, b) => b.rank - a.rank)
    }
}

class App {
    turn = 0;
    player = new Player();
    ennemy = new Player();
    board = new Board();

    constructor() {

    }

    updateEveryTurn() {
        this.turn += 1;
        this.player.updateEveryTurn(readline().split(' '));
        this.ennemy.updateEveryTurn(readline().split(' '));
        var inputs = readline().split(' ');
        const opponentHand = parseInt(inputs[0]);
        const opponentActions = parseInt(inputs[1]);
        for (let i = 0; i < opponentActions; i++) {
            const cardNumberAndAction = readline();
        }
        this.board.updateEveryTurn();
    }

    playPhase () {
        if (this.turn <= 30) {
            this.playDraft();
        } else {
            this.playAction();
        }
    }

    playDraft() {
        console.log('PICK', this.board.draft[0].index)
        this.player.deck.addCard(this.board.draft[0]);
    }

    playAction() {
        const summons = this.playSummons();
        const attacks = this.playAttacks();

        let result = [...summons, ...attacks]

        console.log(result.length === 0 ? 'PASS' : result.join(';'))
    }

    playSummons() {
        const summons = []
        let remainingCard = this.board.hand;
        let remainingMana = this.player.mana;

        // Check card available for summons
        for (let i = remainingCard.length; i--;) {
            if (remainingCard[i].cost > this.player.mana) {
                remainingCard.splice(i, 1)
            }
        }

        while (true) {
            const playableCard = [];

            for (const card of remainingCard) {
                if (card.cost <= remainingMana) {
                    playableCard.push(card);
                }
            }

            if (playableCard.length === 0) {
                break;
            }

            playableCard.sort((a, b) => {
                let score = a.rank - b.rank;

                // If card can guard
                if (a.abilities.includes('G')) {
                    score += 100
                }

                return score
            })

            remainingMana -= playableCard[0].cost
            remainingCard = remainingCard.filter(card => card.instanceId!=playableCard[0].instanceId)
            summons.push('SUMMON '+playableCard[0].instanceId)
        }

        return summons
    }

    playAttacks() {
        const attacks = []
        const dangerousCard = []
        const remainingPlayerCard = this.board.player;

        // Remove the card that does not have attack from the attack phase
        for (let i = remainingPlayerCard.length; i--;) {
            if (remainingPlayerCard[i].attack === 0) {
                remainingPlayerCard.splice(i, 1)
            }
        }

        // Search for the dangerous card from the ennemy
        for (const card of this.board.ennemy) {
            if (card.abilities.includes('G')) {
                dangerousCard.push(card)
            }
        }

        if (dangerousCard.length > 0) {
            x: for (const card of dangerousCard) {
                let remainingPower = card.defense;
                for (let i = remainingPlayerCard.length; i--;) {
                    remainingPower -= remainingPlayerCard[i].attack;
                    attacks.push('ATTACK '+remainingPlayerCard[i].instanceId+' '+card.instanceId);   
                    remainingPlayerCard.splice(i, 1)
                    if (remainingPower <= 0) {
                        continue x;
                    }
                }
            }
        }

        for (const card of remainingPlayerCard) {
                attacks.push('ATTACK '+card.instanceId+' -1');
        }

        return attacks;
    }
}

const game = new App();
while (true) {
    game.updateEveryTurn()
    game.playPhase();
}
```
