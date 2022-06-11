const NUMBER_OF_PLAYER = 2
const NUMBER_OF_CARDS_DRAFT = 3

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
    }
}

class Player {
  life = 30;
  maxMana = 0;
  mana = 0;
  rune = 5;
  deck = [];
  hand = [];
  board = [];
  // Data not given
  creatures = 0;
  greenItems = 0;
  blueItems = 0;
  redItems = 0;

  addCardToDeck(card) {
    switch (card.cardType) {
      case 0:
        this.creatures++;
        break;
      case 1:
        this.greenItems++;
        break;
      case 2:
        this.redItems++;
        break;
      case 3:
        this.blueItems++;
        break;
    }
    this.deck.push(card)
  }
}

class MCTS {

}

class Game {
  turn = 0;
  ennemy = new Player();
  me = new Player();

  playNewTurn() {
    this.turn += 1;
    this.turn > 30 ? this.phaseBattle() : this.phaseDraft();
  }

  phaseBattle() {
    this.uselessBattleReading();

    this.ennemy.maxMana+=1;
    this.ennemy.mana=this.ennemy.maxMana;
    this.me.maxMana+=1;
    this.me.mana=this.me.maxMana;

    console.error(this.me);
    console.log('PASS')
  }

  phaseDraft() {
    this.uselessDraftReading();
    const cards = []
    for (let i = 0; i < NUMBER_OF_CARDS_DRAFT; i++) {
      cards.push(new Card(i, readline().split(' ')))
    }
    const cardChoosen = this.chooseBestDraft(cards);
    this.pickCard(cardChoosen);
  }

  chooseBestDraft(cards) {
    return cards[0];
  }

  pickCard(card) {
    this.me.addCardToDeck(card);
    console.log('PICK '+card.index);
  }

  uselessDraftReading() {
    // Useless player reading
    // We actually can get all this informationg differently
    for (let i = NUMBER_OF_PLAYER; i--;) readline();
    const ennemy = readline().split(' ');
    const ennemyActions = parseInt(ennemy[1])
    for (let i = ennemyActions; i--;) readline();
    readline();
  }

  uselessBattleReading() {
    // Useless player reading
    // We actually can get all this informationg differently
    for (let i = NUMBER_OF_PLAYER; i--;) readline();
    const ennemy = readline().split(' ');
    const ennemyActions = parseInt(ennemy[1])
    for (let i = ennemyActions; i--;) readline();
    const cardsNumber = readline();
    for (let i = 0; i < cardsNumber; i++) {
        readline().split(' ')
    }
  }
}

const game = new Game();
while (true) {
    game.playNewTurn();
}
