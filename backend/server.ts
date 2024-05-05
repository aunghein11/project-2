import cors from "cors";
import express from "express";

const app = express();
const port = 5006;
app.use(cors());
app.use(express.json());

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  res.send({ name, email, password });
});

app.listen(port, () =>
  console.log(`Starting server listening on port ${port}!`)
);
