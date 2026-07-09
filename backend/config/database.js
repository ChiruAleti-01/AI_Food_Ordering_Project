const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URI);

    console.log(`MongoDB connected with HOST: ${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:");
    console.error(error);
  }
};

module.exports = connectDB;