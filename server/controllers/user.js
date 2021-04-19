import express from 'express';
import bcrypt from 'bcryptjs'


import UserModal from "../models/user.js"

const router = express.Router();

export const getAllUsers = async (req, res) => { 
    try {
        const users = await UserModal.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const createNewUser = async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;
    try {
        const user = await UserModal.create({ email, password: bcrypt.hashSync(password), name: `${firstName} ${lastName}`, isAdmin: !!isAdmin });
        res.json(user);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(e);
    }
}

export const editUser = async (req, res) => {
    const _id = req.params.id;
    const { firstName, lastName, email, password, isAdmin } = req.body;
    req.body.name = `${firstName} ${lastName}`;
    try {
        const user = await UserModal.findById(_id);
        const currPassword = user.password;
        await UserModal.findByIdAndDelete(_id);
        const updatedUser = await UserModal.create({name: `${firstName} ${lastName}`, email, password: password ? password : currPassword, isAdmin});
        res.json({ user: updatedUser });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(e);
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const user = await UserModal.deleteOne({_id: id})
    res.json(id)
}

