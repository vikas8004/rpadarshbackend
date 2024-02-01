import mongoose from "mongoose";

const connect = async () => {
  const mongoCon = await mongoose.connect(process.env.MONGO_URI);
  if (mongoCon) {
    console.log(mongoCon.connection.host, "db connection successful");
  }
};

export default connect;
