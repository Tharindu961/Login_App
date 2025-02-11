import express from "express";
import connectDB from "./config/db"




//Routes
import Auth from "./routes/auth/auth.routes" 

const app = express();

const PORT = process.env.PORT | 5003;

//Database Connection
connectDB();

app.use("/api/auth", Auth);


app.listen(PORT, () => {
    console.log(`App started at PORT ${PORT}`);
});