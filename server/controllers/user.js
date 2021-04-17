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

