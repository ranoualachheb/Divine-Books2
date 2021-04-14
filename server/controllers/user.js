import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import UserModal from "../models/user.js"

const secret = 'test'

export const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModal.findOne({email})
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({email, id: user.id}, secret, {expiresIn: 36000})
            res.json({user, token})
        }
    }
  } catch (e) {
      res.json({message: "Something went wrong"})
      console.log(e)
  }
}

export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    
    try {
        const allUsers = await UserModal.find()
        let admin
        if (!allUsers.length) {
            admin = true
        } else {
            admin = false
        }
        const user = await UserModal.findOne({ email })
        if (!user) {
            const hashedPassword = await bcrypt.hashSync(password)
            const createdUser = await UserModal.create({email, password: hashedPassword, name: `${firstName} ${lastName}`, isAdmin: admin})
            const token = jwt.sign({email, id: createdUser.id}, secret, {expiresIn: 36000})
            res.json({user: createdUser, token})
        }
        res.json({message: "User already exists"})
    } catch (e) {
        res.status(500).json({message: "Something went wrong"})
        console.log(e)
    }
}