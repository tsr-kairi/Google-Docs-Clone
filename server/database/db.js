import mongoose from "mongoose";

const Connection = async (username = "ranjit123", password = "ranjit123") => {
  const URL = `mongodb://${username}:${password}@google-docs-clone-shard-00-00.bsc6o.mongodb.net:27017,google-docs-clone-shard-00-01.bsc6o.mongodb.net:27017,google-docs-clone-shard-00-02.bsc6o.mongodb.net:27017/RANJIT?ssl=true&replicaSet=atlas-wxj2sq-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while Connecting with the database", error);
  }
};

export default Connection;
