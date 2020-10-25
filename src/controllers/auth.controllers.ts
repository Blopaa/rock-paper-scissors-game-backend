import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { comparePassword, encryptPassword } from "../helpers/passwords";
import User from "../models/User";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      password: await encryptPassword(password),
    });

    const savedUser = await user.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET || "", {
      expiresIn: 178400,
    });

    return res.status(200).json(token);
  } catch (err) {
    return res.status(400).json({ message: "the body sent is not valid" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const userFound = await User.findOne({ email: req.body.email });

  if (!userFound) return res.status(404).json({ message: "User not found" });

  const matchPassword = await comparePassword(
    userFound.password,
    req.body.password
  );

  if (!matchPassword)
    return res.status(400).json({ message: "password mismatch" });

  const token = jwt.sign({ id: userFound._id }, process.env.SECRET || "", {
    expiresIn: 178400,
  });

  return res.status(200).json(token);
};
