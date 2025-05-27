import signupCollection from "../model/model.js";
//handles json web token
import jwt from 'jsonwebtoken'
//handles env file
import dontenv from 'dotenv'

dontenv.config()

const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET,{expiresIn:"1h"})
}

export const regesterUser = async(req,res) => {
    const {name,email,password}=req.body;
    try{
        let user = await signupCollection.findOne({ email })
        if(user) return res.status(400).json({message: "Email already registered"})

        user = new signupCollection({name, email, password})
        await user.save()

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    catch(err)
    {
        res.status(500).json({ err: err.message })
    }
}

export const loginUser = async (req, res) => {
    const { email1, password1 } = req.body;

    try {
        const user = await signupCollection.findOne({ email: email1 });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await user.matchPassword(password1);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}
