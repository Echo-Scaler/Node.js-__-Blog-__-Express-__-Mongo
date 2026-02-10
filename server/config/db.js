const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected Sucessfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connection String is missing or invalid!");
    console.log(error);
  }
  console.log("mongodb+srv://waiyantoshima12_db_user:<db_password>@cluster0.shpjsbx.mongodb.net/?appName=Cluster0");
}


module.exports = connectDB;


