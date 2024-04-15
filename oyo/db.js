import mongoose from "mongoose";

const URI =
  "mongodb+srv://poptanikrish1:fxRe2PSdWpL0yUxa@oyoroom.kc8exlu.mongodb.net/OYO";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected...");
};

export default connectDB;
