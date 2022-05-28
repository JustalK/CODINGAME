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

        this.rank = (this.attack + this.defense) / this.cost;
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
        this.draft.sort((a, b) => a.rank - b.rank)
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
            console.error(cardNumberAndAction)
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
        let index = 0
        if (!this.player.deck.isStrongCardNeeded()) {
            let card = this.board.draft.find(c => c.cost < 6);
            if (!card) {
                card = this.board.draft;
            }
            index = card.index;
        }
        console.log('PICK', index)
        this.player.deck.addCard(this.board.draft[index]);
    }

    playAction() {
        const summons = []
        for (const card of this.board.hand) {
            if (card.cost <= this.player.mana) {
                summons.push(card);
            }
        }

        const attacks = []
        for (const card of this.board.player) {
            //if (this.board.ennemy.length === 0) {
                attacks.push(card);    
            //}
        }

        let result = []
        if (summons.length > 0) {
            result.push('SUMMON '+summons[0].instanceId)
        }

        if (attacks.length > 0) {
            for (const card of attacks) {
                result.push('ATTACK '+card.instanceId+' -1')
            }
        }

        console.log(result.length === 0 ? 'PASS' : result.join(';'))
    }
}

const game = new App();
while (true) {
    game.updateEveryTurn()
    game.playPhase();
}
```
