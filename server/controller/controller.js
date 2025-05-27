import signupCollection from "../model/model.js";

export const signup = async (req,res) => {
    try {
        const data = new signupCollection(req.body)
        await data.save()
        res.status(201).json("Account has been created")
    }
    catch (err)
    {
        res.status(400).json({error:err.message})
    }
}