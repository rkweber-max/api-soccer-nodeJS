let stats = [];
let currentStatId = 1;

export function createStat({
  playerId,
  minutesPlayed,
  distanceKM,
  avgSpeed,
  notes,
}) {
  const newStat = {
    id: currentStatId++,
    playerId,
    minutesPlayed,
    distanceKM,
    avgSpeed,
    notes,
  };

  stats.push(newStat);
  return newStat;
}

export function getStatByPlayer(playerId) {
  return stats.find((stat) => stat.playerId === playerId);
}
