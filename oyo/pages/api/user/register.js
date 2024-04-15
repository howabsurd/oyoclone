import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All Fields are mandatory" });
    }
    const emailExists = await User.findOne({ email: email });
    if (emailExists) res.status(400).json({ msg: "User already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });
    const result = newUser.save();
    const token = jwt.sign({ token: result._id }, "Code_AJ", {
      expiresIn: "30d",
    });
    return res
      .status(200)
      .json({ msg: "Registered Successfully", token, user: result });
  }
}
