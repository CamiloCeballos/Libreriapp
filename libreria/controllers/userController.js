import userModel from "../models/userModel.js";

export function readUser(req, res){
    
    res.sendStatus(200)
}

export function createUser(req, res){
    const {name,age} = req.body;
    userModel.create({
        name,
        age
    })
    res.sendStatus(200)
}

export function updateUser(req, res){
    res.sendStatus(200)
}

export function deleteUser(req, res){
    res.sendStatus(200)
}

