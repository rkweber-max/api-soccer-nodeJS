import express from "express";
import playersRoutes from "./src/routes/players.js";
import statsRoutes from "./src/routes/stats.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/players", playersRoutes);
app.use("/stats", statsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;
