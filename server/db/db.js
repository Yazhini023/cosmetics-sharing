//handling the connectivity between the backend and database
//throught connectivity string from mongodb

import mongoose from 'mongoose'

const connectdb = () => {
    try{
        mongoose.connect("mongodb://localhost:27017/cosmetics")//insteaded of localhost we can use 127.0.0.1
        console.log("Database has been connected");
        
    }
    catch (err)
    {
        console.error("db is not connected",err);
    }
}

export default connectdb