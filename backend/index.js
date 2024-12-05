import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

try {
    await db.authenticate();
    console.log ("Data base connect")
} catch (error) {
    console.error(error);
    
}



const app = express ();
app.use (cors());
app.use (express.json());
app.use (UserRoute);


app.listen(4000, ()=> console.log ('Serever ini sudah berjalan.....'));