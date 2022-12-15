/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

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
    this.totalScrapable = 0;
  }

  setTotalScrapable(value) {
    this.totalScrapable = value;
  }
}

class Tank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Whatever {
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

    // Set Informations
    this.setScrapableCapacity();
    // Playing
    this.canBuild() && this.building();
    this.moveTanks();
    this.printActions();
  }

  setScrapableCapacity() {
    const myTiles = this.map.filter((t) => t.owner === 1);
    for (const myTile of myTiles) {
      const adjacentTiles = this.getAdjacentTiles(myTile.x, myTile.y);
      const tmpTotalScrapable = adjacentTiles.reduce(
        (acc, t) => (t ? acc + t.scrapAmount : acc),
        0
      );
      myTile.setTotalScrapable(tmpTotalScrapable);
    }
  }

  // RECYCLER
  building() {
    const tiles = this.getMyOwnFreeTile();
    const getGoodTiles = tiles.filter((t) => t.scrapAmount === 10);
    if (getGoodTiles.length > 0) {
      this.actions.push(`BUILD ${getGoodTiles[0].x} ${getGoodTiles[0].y}`);
      this.myMatter -= 10;
    }

    const myFront = this.getMyClosestTankToEnnemies();
    if (this.myMatter >= 20 && myFront) {
      const amount = 1;
      this.actions.push(`SPAWN ${amount} ${myFront.x} ${myFront.y}`);
    }
  }

  canBuild() {
    return this.myMatter >= 10;
  }

  // TANKS
  moveTanks() {
    const myFront = this.getMyClosestTankToEnnemies();
    const myScout = this.getMyFurthestTankToEnnemies();
    for (const myTank of this.myTanks) {
      this.moveTank(myTank);
    }
  }

  moveTank(myTank) {
    let adjacentTiles = this.getAdjacentTiles(myTank.x, myTank.y);
    adjacentTiles = adjacentTiles.filter(
      (t) => t && t.recycler !== 1 && t.scrapAmount !== 0
    );
    let move = false;
    for (const adjacentTile of adjacentTiles) {
      if (adjacentTile && adjacentTile.owner !== 1) {
        this.actions.push(
          `MOVE 1 ${myTank.x} ${myTank.y} ${adjacentTile.x} ${adjacentTile.y}`
        );
        move = true;
        break;
      }
    }

    if (!move) {
      const closestFreeTile = this.getClosestFreeTile(myTank.x, myTank.y);
      if (closestFreeTile) {
        this.actions.push(
          `MOVE 1 ${myTank.x} ${myTank.y} ${closestFreeTile.x} ${closestFreeTile.y}`
        );
      }
    }
  }

  getBestScrapableTile() {
    return this.myTiles.reduce(
      (best, current) =>
        best.totalScrapable > current.totalScrapable ? best : current,
      this.myTiles[0]
    );
  }

  getMyClosestTankToEnnemies() {
    let tank = null;
    let distance = 0;
    for (const myTank of this.myTanks) {
      for (const ennemyTank of this.ennemiesTanks) {
        const tmpDistance = this.distanceTiles(
          myTank.x,
          myTank.y,
          ennemyTank.x,
          ennemyTank.y
        );
        if (!tank || tmpDistance < distance) {
          tank = myTank;
          distance = tmpDistance;
        }
      }
    }

    return tank;
  }

  getMyFurthestTankToEnnemies() {
    let tank = null;
    let distance = 0;
    for (const myTank of this.myTanks) {
      for (const ennemyTank of this.ennemiesTanks) {
        const tmpDistance = this.distanceTiles(
          myTank.x,
          myTank.y,
          ennemyTank.x,
          ennemyTank.y
        );
        if (!tank || tmpDistance > distance) {
          tank = myTank;
          distance = tmpDistance;
        }
      }
    }

    return tank;
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

  distanceTiles(x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
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

  getClosestFreeTile(x, y) {
    const getAroundTiles = this.getAroundTiles();
    let distance = null;
    let tile = null;

    for (const getAroundTile of getAroundTiles) {
      const tmpDistance = this.distanceTiles(
        x,
        getAroundTile.x,
        y,
        getAroundTile.y
      );
      if (!distance || tmpDistance < distance) {
        distance = tmpDistance;
        tile = getAroundTile;
      }
    }

    return tile;
  }

  getAroundTiles() {
    let rsl = [];

    const myTiles = this.map.filter((t) => t && t.owner === 1);
    for (const tile of myTiles) {
      const adjacentTiles = this.getAdjacentTiles(tile.x, tile.y);
      for (const adjacentTile of adjacentTiles) {
        if (
          adjacentTile &&
          adjacentTile.owner !== 1 &&
          adjacentTile.scrapAmount !== 0
        ) {
          rsl.push(adjacentTile);
        }
      }
    }

    return rsl;
  }

  printActions() {
    this.actions.push("WAIT");
    console.log(this.actions.join(";"));
  }
}

// game loop
while (true) {
  new Whatever();
}
