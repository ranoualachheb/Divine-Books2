import express from 'express';
import mongoose from 'mongoose';

import UserModal from "../models/user.js"

const router = express.Router();

export const getAllUsers = async (req, res) => { 
    console.log('we are getting all the users now')
    try {
        const users = await UserModal.find()
        res.status(200).json(users)
        console.log(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const createNewUser = async (req, res) => {
    console.log('we are making a new user')
    const { firstName, lastName, email, password, isAdmin } = req.body;
    try {
        const user = await UserModal.create({ email, password: bcrypt.hashSync(password), name: `${firstName} ${lastName}`, isAdmin });
        res.json(user);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(e);
    }
}

