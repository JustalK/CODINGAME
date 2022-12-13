var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

class Tile {
  constructor(x, y, input, owner) {
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
    this.moveTanks();
    this.printActions();
  }

  // RECYCLER
  building() {
    const tiles = this.getMyOwnFreeTile();
    if (tiles.length > 0) {
      this.actions.push(`BUILD ${tiles[0].x} ${tiles[0].y}`);
    }
  }

  canBuild() {
    return this.myMatter > 10;
  }

  // TANKS
  moveTanks() {
    for (const myTank of this.myTanks) {
      this.moveTank(myTank);
    }
  }

  moveTank(myTank) {
    const adjacentTiles = this.getAdjacentTiles(myTank.x, myTank.y, true);
    const tile = this.chooseMove(adjacentTiles);
    if (tile !== null) {
      this.actions.push(`MOVE 1 ${myTank.x} ${myTank.y} ${tile.x} ${tile.y}`);
    }
  }

  chooseMove(tiles) {
    return tiles[0];
  }

  // TILES
  getMyOwnFreeTile() {
    const positionTanks = this.myTanks.map((t) => `${t.x}, ${t.y}`);
    return this.map.filter(
      (t) =>
        t.owner === 1 &&
        t.recycler === 0 &&
        !positionTanks.includes(`${t.x}, ${t.y}`)
    );
  }

  getAdjacentTiles(x, y, onlyScrapable = false) {
    const rsl = [];
    const adjacentPositions = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    if (onlyScrapable) {
      return adjacentPositions
        .map((p) => this.getTileAt(p[0], p[1]))
        .filter((t) => t && t.scrapAmount !== 0);
    }
    return adjacentPositions
      .map((p) => this.getTileAt(p[0], p[1]))
      .filter((t) => t !== null);
  }

  getTileAt(x, y) {
    return this.map.find((t) => t.x === x && t.y === y);
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