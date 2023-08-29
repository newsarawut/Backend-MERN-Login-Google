const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_NAME);
    console.log("Connected DB Successs");
  } catch (err) {
    console.log("Database Error!!", err);
  }
};

module.exports = connectDB;
