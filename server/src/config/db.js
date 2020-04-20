import { connect } from "mongoose";
const mongoUrl = 
    "mongodb+srv://tharindu:tharindu@cluster0-5ref1.mongodb.net/test?retryWrites=true&w=majority";

    const connectDB = async () => {
        try {
            await connect(mongoUrl, {
               useUnifiedTopology: true,
               useNewUrlParser: true
            });
            console.log("Connected to the Database");
        }catch (err) {
            console.log(err.message);
        }
    };

export default connectDB;