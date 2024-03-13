import express from 'express'
import connection from './db/connection.js'
import routes from "./routes/user_route.js"
import cors from "cors";
import logger from "morgan";



const app = express();
const Port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

connection.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!");

  app.listen(Port, () => {
    console.log(`Express server running on port ${Port}`);
  });
});