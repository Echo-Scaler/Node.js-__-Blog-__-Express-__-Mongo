const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected Sucessfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connection String is missing or invalid!");
    console.log(error);
  }
}

module.exports = connectDB;