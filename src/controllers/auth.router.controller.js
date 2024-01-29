import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import {SECRET_TOKEN} from "../config.js";

// Function to create a user
export const register = async (req, res) => {
  const { name, lastname, user, password, role, departament } = req.body;
  try {

     const userFound = await User.findOne({user})
     if (userFound)
       return res.status(400).json(["User is already registered"]);

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastname,
      user,
      password: passwordHash,
      role,
      departament,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json(userSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login function
export const login = async (req, res) => {
  const { user, password } = req.body;
  try {
    const userFound = await User.findOne({ user });
    console.log(userFound);
    if (!userFound) return res.status(400).json({ message: "User not foud" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      lastname: userFound.lastname,
      user: userFound.user,
      tickets: userFound.tickets,
      rol: userFound.role
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout function
export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    name: userFound.name,
    lastname: userFound.lastname,
    user: userFound.user,
    tickets: userFound.tickets,
  });
  res.send("profile");
};

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_TOKEN, async (err,user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await User.findById(user.id)
    if (!userFound) return res.status(401).json({ message: "Unauthorized"});

    return res.json({
      id: userFound._id,
      user: userFound.user,
      tickets: userFound.tickets  
    });
  })
};