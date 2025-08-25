import {
  createPlayer,
  getPlayerById,
  listPlayers,
} from "../models/playerModel.js";

export const create = (req, res) => {
  const { fullName, age, hight, weight, position, team } = req.body;

  if (!fullName) {
    return res.status(400).json({ error: "All required fields" });
  }

  const player = createPlayer({ fullName, age, hight, weight, position, team });
  res.status(201).json(player);
};

export const getById = (req, res) => {
  const { id } = req.params;
  const player = getPlayerById(Number(id));

  if (!player) {
    return res.status(404).json({ error: "Player is not found" });
  }

  res.json(player);
};

export const list = (req, res) => {
  res.json(listPlayers());
};
