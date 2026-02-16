//rhythma141_db_user
//Rhythm9762300156

const mongoose = require("mongoose")

const DB_URL = "mongodb+srv://rhythma141_db_user:Rhythm9762300156@cluster0.kzgjgos.mongodb.net/?appName=Cluster0";

const connectToDatabase = async () => {
    try{
        mongoose.connect(DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(`Database connection error is: ${error}`);
    }
}
module.exports = connectToDatabase;