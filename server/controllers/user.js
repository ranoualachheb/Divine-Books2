import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'


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

export const editUser = async (req, res) => {
    console.log('we are editing a user now')
    const _id = req.params.id;
    const { firstName, lastName, email, password, isAdmin } = req.body;
    req.body.name = `${firstName} ${lastName}`;
    try {
        const user = await UserModal.findById(_id);
        const currPassword = user.password;
        await UserModal.findByIdAndDelete(_id);
        const updatedUser = await UserModal.create({name: `${firstName} ${lastName}`, email, password: password ? password : currPassword, isAdmin});
        console.log(updatedUser)
        res.json({ user: updatedUser });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(e);
    }
}

