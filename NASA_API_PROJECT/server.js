import express from 'express'
import connection from './db/connection.js'
import routes from "./routes/user_route.js"
import cors from "cors";
import logger from "morgan";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

app.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));

  app.listen(PORT, () => {
    console.log(chalk.magenta(`Express server running on port ${PORT}`));
  });
});