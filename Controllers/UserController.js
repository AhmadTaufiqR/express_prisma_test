import { PrismaClient } from "@prisma/client";
import bycript from "bcrypt";

const prisma = new PrismaClient();

const rounds = 10;

export const getAllUsers = async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bycript.hash(password, rounds);
    const response = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
