class PlayerDatabase {
  static getPlayers(): Player[] {
    return [
      {
        id: 1,
        name: "LeBron James",
        image: "https://i.imgur.com/hEY26sT.png",
        stats: {
          pointsPerGame: 27.2,
          reboundsPerGame: 7.4,
          assistsPerGame: 7.2,
          stealsPerGame: 1.6,
          blocksPerGame: 0.8,
        },
      },
      {
        id: 2,
        name: "Stephen Curry",
        image: "https://i.imgur.com/dEMeJW8.png",
        stats: {
          pointsPerGame: 25.5,
          reboundsPerGame: 5.3,
          assistsPerGame: 6.6,
          stealsPerGame: 1.4,
          blocksPerGame: 0.2,
        },
      },
      {
        id: 2,
        name: "Kevin Durent",
        image: "https://i.imgur.com/dEMeJW8.png",
        stats: {
          pointsPerGame: 23.5,
          reboundsPerGame: 5.4,
          assistsPerGame: 7.6,
          stealsPerGame: 2.4,
          blocksPerGame: 0.2,
        },
      },
      // add more players here...
    ];
  }
}
