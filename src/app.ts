import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors);

app.get("/", (req: Request, res: Response) => {
  res.json("Hello World!");
});

export default app;
