const mongoose = require("mongoose");

// Modified URI with 'waiyantoshima12_db_user'
const uri =
  "mongodb+srv://waiyantoshima12_db_user:21ZXZBE5QHTmq2Pl@cluster0.shpjsbx.mongodb.net/blog?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    console.log("Attempting to connect with URI:", uri);
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    process.exit(0);
  } catch (error) {
    console.error("Connection Error Details:");
    console.error(error);
    process.exit(1);
  }
};

connectDB();
