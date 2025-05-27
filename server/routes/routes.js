import express from "express"

import { regesterUser, loginUser } from "../controller/authcontroller.js";
const route = express.Router();

route.post("/",regesterUser)
route.post("/login",loginUser)

export default route;