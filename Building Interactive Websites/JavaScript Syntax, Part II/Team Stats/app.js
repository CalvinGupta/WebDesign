const team = {
  _players: [
    {firstName: "Alex", lastName: "Ovechkin", age: 40},
    {firstName: "Tom", lastName: "Wilson", age: 31},
    {firstName: "Ryan", lastName: "Leonard", age: 20}
  ],
  _games: [
    {opponent: "Rangers", teamPoints: 6, opponentPoints: 3},
    {opponent: "Senators", teamPoints: 3, opponentPoints: 4},
    {opponent: "Ducks", teamPoints: 7, opponentPoints: 4}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
}

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);