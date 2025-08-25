import { getPlayerById } from "../models/playerModel.js";
import { createStat, getStatByPlayer } from "../models/statModel.js";

export const create = (req, res) => {
  const { playerId } = req.params;
  const { minutesPlayed, distanceKM, avgSpeed, notes } = req.body;

  const player = getStatByPlayer(Number(playerId));

  if (!player) {
    return res.status(404).json({ error: "Player is not found" });
  }

  if (!minutesPlayed) {
    return res.status(400).json({ error: "All required fields" });
  }

  const stat = createStat({
    playerId,
    minutesPlayed,
    distanceKM,
    avgSpeed,
    notes,
  });

  res.status(201).json(stat);
};

export const list = (req, res) => {
  const { playerId } = req.params;

  const player = getPlayerById(playerId);
  if (!player) {
    return res.status(400).json({ error: "Player is not found" });
  }

  res.json(getStatByPlayer(player));
};
