import mongoose from "mongoose";

const connectionString =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/apod_api"

mongoose.set("returnOriginal", false);

mongoose.connect(connectionString).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;