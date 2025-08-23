let players = [];
let currentId = 1;

export function createPlayer({ fullName, age, hight, weight, position, team }) {
  const newPlayer = {
    id: currentId++,
    fullName,
    age,
    hight,
    weight,
    position,
    team,
  };

  players.push(newPlayer);
  return newPlayer;
}

export function getPlayerById(playerId) {
  return players.find((player) => player.id === playerId);
}

export function listPlayers() {
  return players;
}
