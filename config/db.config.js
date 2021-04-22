const mongoose = require("mongoose");
const chalk = require("chalk");

// Replace this with your MONGOURI.
const MONGOURI = `mongodb+srv://root:Pawan08082000@cluster0.mc3wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
      console.log(chalk.bgGreen("Connected to database"));
} catch (e) {
  console.log(e)
    throw e;
  }
};
module.exports = InitiateMongoServer;
