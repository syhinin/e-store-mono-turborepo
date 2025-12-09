import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true,
  })
);

router.get("/health", (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Product service is running on port ${PORT}`);
});
