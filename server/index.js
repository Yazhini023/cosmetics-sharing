import connectdb from "./db/db.js";
import express from 'express'
import cors from 'cors'
import route from "./routes/routes.js";

//declration
const PORT = process.env.PORT || 5000
const app=express()

//function call
connectdb()
//middle ware
app.use(express.json())
app.use(cors());
app.use('/cosmetics',route)
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})