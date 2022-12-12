var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

const COST_RECYCLER = 10;

class Tile {
  constructor(x, y, inputs, owner) {
    this.x = x;
    this.y = y;
    this.scrapAmount = parseInt(inputs[0]);
    this.owner = owner;
    this.recycler = parseInt(inputs[3]);
    this.canBuild = parseInt(inputs[4]);
    this.canSpawn = parseInt(inputs[5]);
    this.inRangeOfRecycler = parseInt(inputs[6]);
  }
}

class Tank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Game {
  constructor() {
    this.map = [];
    this.myTanks = [];
    this.ennemiesTanks = [];
    this.actions = [];

    inputs = readline().split(" ");
    this.myMatter = parseInt(inputs[0]);
    this.oppMatter = parseInt(inputs[1]);

    // Parse over the tiles
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        inputs = readline().split(" ");
        const owner = parseInt(inputs[1]);
        if (parseInt(inputs[2]) > 0) {
          owner === 1
            ? this.myTanks.push(new Tank(j, i, owner))
            : this.ennemiesTanks.push(new Tank(j, i, owner));
        }
        const tile = new Tile(j, i, inputs, owner);
        this.map.push(tile);
      }
    }

    // Playing
    this.canBuild() && this.building();

    this.printActions();
  }

  building() {
    const tiles = this.getMyOwnFreeTile();
    if (tiles.length > 0) {
      this.actions.push(`BUILD ${tiles[0].x} ${tiles[0].y}`);
    }
  }

  canBuild() {
    return this.myMatter > COST_RECYCLER;
  }

  getMyOwnFreeTile() {
    const positionTanks = this.myTanks.map((t) => `${t.x}, ${t.y}`);
    console.warn(positionTanks);
    return this.map.filter(
      (t) =>
        t.owner === 1 &&
        t.recycler === 0 &&
        !positionTanks.includes(`${t.x}, ${t.y}`)
    );
  }

  printActions() {
    this.actions.push("WAIT");
    console.log(this.actions.join(";"));
  }
}

// game loop
while (true) {
  new Game();
}
